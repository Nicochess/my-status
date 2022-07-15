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

      <UserStatus
        name="Nicolas Magno"
        status={false}
        profile="https://avatars.githubusercontent.com/u/66505477?v=4"
      />
      <UserStatus
        name="Nicolas Magno"
        status={false}
        profile="https://avatars.githubusercontent.com/u/66505477?v=4"
      />
    </div>
  );
};

export default HomeScreen;
