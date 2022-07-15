import React, { useContext } from "react";
import Menubar from "../../components/Menubar";
import StatusView from "../../components/StatusView";
import UserStatus from "../../components/UserStatus";
import { AuthContext } from "../../store/context/AuthContext";

const HomeScreen: React.FC = () => {
  const { userData, currentUser } = useContext(AuthContext);

  return (
    <div>
      <Menubar />
      {userData && <StatusView status={userData?.status} />}

      {currentUser && (
        <UserStatus
          name={currentUser?.displayName || ""}
          status={userData?.status}
          profile={currentUser?.photoURL || ""}
        />
      )}
    </div>
  );
};

export default HomeScreen;
