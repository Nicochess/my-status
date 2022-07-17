import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  User,
} from "firebase/auth";
import { arrayUnion, doc, setDoc, updateDoc } from "firebase/firestore";
import { getDownloadURL, uploadBytes, ref } from "firebase/storage";
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

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
      navigate("/");
    });

    return unsub;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const registerUser = async (form: Form) => {
    createUserWithEmailAndPassword(auth, form.email, form.password).then(
      async (cred) => {
        const imageRef = ref(storage, `profile/${cred.user.uid}`);
        if (form.file) {
          await uploadBytes(imageRef, form.file[0]);
        }
        const photoURL = await getDownloadURL(imageRef);

        await updateProfile(cred.user, {
          displayName: form.username,
          photoURL: photoURL,
        });

        setDoc(doc(db, "users/" + cred.user.uid), {
          displayName: cred.user?.displayName,
          photoURL: cred.user?.photoURL,
          uid: cred.user?.uid,
          friends: [cred.user.uid],
          status: false,
        });
      }
    );
  };

  const addFriend = async (newFriend: string) => {
    setLoading(true);
    const userRef = doc(db, "users/" + currentUser?.uid);

    updateDoc(userRef, {
      friends: arrayUnion(newFriend),
    });
    setLoading(false);
  };

  const switchStatus = (status: boolean) => {
    const userRef = doc(db, "users/" + currentUser?.uid);
    updateDoc(userRef, {
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
    switchStatus,
    setLoading,
    currentUser,
    loading,
  };

  if (loading) return <div>Loading...</div>;

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
