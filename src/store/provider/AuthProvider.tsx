import { Co2Sharp } from "@mui/icons-material";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  User,
} from "firebase/auth";
import {
  doc,
  DocumentData,
  getDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../firebase";
import { AuthContext } from "../context/AuthContext";

type Props = {
  children: React.ReactNode;
};

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();
  const [userData, setUserData] = useState<UserData | DocumentData | null>(
    null
  );

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      navigate("/");
      setLoading(false);
    });

    return unsub;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const getDocs = async () => {
      if (!currentUser) return;
      const docRef = doc(db, "users", currentUser?.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        setUserData(data);
      }
    };

    getDocs();
  }, [currentUser]);

  const registerUser = async (form: Form) => {
    createUserWithEmailAndPassword(auth, form.email, form.password).then(
      async (cred) => {
        await updateProfile(cred.user, {
          displayName: form.username,
          photoURL: form.file,
        });

        setDoc(doc(db, "users", cred.user.uid), {
          friends: [],
          status: false,
        });
      }
    );
  };

  const addFriend = (friendList: string[]) => {
    const docRef = doc(db, `users/${currentUser?.uid}`);
    updateDoc(docRef, {
      friends: [...friendList],
    });
  };

  const switchStatus = (status: boolean) => {
    const docRef = doc(db, `users/${currentUser?.uid}`);
    console.log(status);
    updateDoc(docRef, {
      status: status,
    });
  };

  const logout = () => {
    signOut(auth);
  };

  const login = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const value = {
    registerUser,
    login,
    logout,
    addFriend,
    currentUser,
    userData,
    switchStatus,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
