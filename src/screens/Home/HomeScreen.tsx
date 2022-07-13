import React from "react";
import Menubar from "../../components/Menubar";
import StatusView from "../../components/StatusView";
import UserStatus from "../../components/UserStatus";

const HomeScreen: React.FC = () => {
  return (
    <div>
      <Menubar />
      <StatusView status={true} />
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
