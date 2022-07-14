import React, { useContext } from "react";
import Menubar from "../../components/Menubar";
import StatusView from "../../components/StatusView";
import UserStatus from "../../components/UserStatus";
import { AuthContext } from "../../store/context/AuthContext";

const HomeScreen: React.FC = () => {
  const { userData } = useContext(AuthContext);

  return (
    <div>
      <Menubar />
      {userData && <StatusView status={userData?.status} />}

      <UserStatus
        name="Laks"
        status={true}
        profile="https://avatars.githubusercontent.com/u/51419598?v=4"
      />
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
