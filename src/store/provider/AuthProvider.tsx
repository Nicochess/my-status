import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  User,
} from "firebase/auth";
import { onValue, ref, set } from "firebase/database";
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
  const [userData, setUserData] = useState<UserData | null>(null);

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
      const docRef = ref(db, "users/" + currentUser?.uid);
      onValue(docRef, (snapshot) => {
        const data = snapshot.val();
        setUserData(data);
      });
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

        set(ref(db, "users/" + cred.user.uid), {
          friends: [],
          status: false,
        });
      }
    );
  };

  const addFriend = (friendList: string[]) => {
    set(ref(db, "users/" + currentUser?.uid), {
      friends: [...friendList],
    });
  };

  const switchStatus = (status: boolean) => {
    set(ref(db, "users/" + currentUser?.uid), {
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
