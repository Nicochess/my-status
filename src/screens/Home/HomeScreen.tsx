import {
  collection,
  doc,
  DocumentData,
  getDoc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import Menubar from "../../components/Menubar";
import StatusView from "../../components/StatusView";
import UserStatus from "../../components/UserStatus";
import { db } from "../../firebase";
import { AuthContext } from "../../store/context/AuthContext";

const HomeScreen: React.FC = () => {
  const { currentUser } = useContext(AuthContext);
  const [listFriends, setFriendsList] = useState<UserData[] | DocumentData>([]);
  const [status, setStatus] = useState<boolean>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getData = async () => {
      const userRef = doc(db, "users/" + currentUser?.uid);
      const user = await getDoc(userRef);
      if (!user.exists()) return;
      setStatus(user.data().status);
      const dbRef = collection(db, "users");
      const q = query(dbRef, where("uid", "in", user.data().friends));
      const unsub = onSnapshot(q, (snapList) => {
        let friends: DocumentData[] = [];
        snapList.forEach((snap) => {
          friends.push(snap.data());
        });

        setFriendsList(friends);
      });

      setLoading(false);
      return unsub;
    };

    getData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Menubar />
      {!loading && <StatusView status={status} />}

      {!loading &&
        listFriends?.map((user: UserData) => (
          <UserStatus
            name={user && user.displayName}
            status={user && user.status}
            profile={user && user.photoURL}
            key={user && user.uid}
          />
        ))}
    </div>
  );
};

export default HomeScreen;
