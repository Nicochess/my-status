import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  User,
} from "firebase/auth";
import { onValue, ref, set } from "firebase/database";
import {
  getDownloadURL,
  uploadBytes,
  ref as refStorage,
} from "firebase/storage";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db, storage } from "../../firebase";
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
        const imageRef = refStorage(storage, `profile/${cred.user.uid}`);
        if (form.file) {
          await uploadBytes(imageRef, form.file[0]);
        }
        const photoURL = await getDownloadURL(imageRef);

        await updateProfile(cred.user, {
          displayName: form.username,
          photoURL: photoURL,
        });

        set(ref(db, "users/" + cred.user.uid), {
          friends: [cred.user.uid],
          status: false,
        });
      }
    );
  };

  const addFriend = (newFriend: string) => {
    if (!userData?.friends) return;
    const newList = [newFriend, ...userData.friends];
    const validate = checkUser(newFriend);
    if (validate) {
      set(ref(db, "users/" + currentUser?.uid), {
        friends: newList,
        status: userData.status,
      });
    }
  };

  const checkUser = (id: string) => {
    const docRef = ref(db, "users/" + id);
    let value;
    onValue(docRef, (snapshot) => {
      value = snapshot.val();
    });

    return value;
  };

  const switchStatus = (status: boolean) => {
    set(ref(db, "users/" + currentUser?.uid), {
      status: status,
      friends: userData?.friends,
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
    switchStatus,
    currentUser,
    userData,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
