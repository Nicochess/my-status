import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  User,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { auth, db } from "../../firebase";
import { AuthContext } from "../context/AuthContext";

type Props = {
  children: React.ReactNode;
};

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsub;
  }, []);

  const registerUser = async (form: Form) => {
    createUserWithEmailAndPassword(auth, form.email, form.password).then(
      async (cred) => {
        await updateProfile(cred.user, {
          displayName: form.username,
        });

        setDoc(doc(db, "users", cred.user.uid), {
          friends: [],
          status: false,
        });
      }
    );
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
    currentUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
