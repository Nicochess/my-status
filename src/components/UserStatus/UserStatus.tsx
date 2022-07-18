import React from "react";
import { StyledStatus } from "./styles";
import Fallback from "../../assets/icon.png";

type Props = {
  name: string;
  status: boolean;
  profile: string;
};

const UserStatus: React.FC<Props> = ({ name, status, profile }) => {
  return (
    <StyledStatus status={status}>
      <img src={profile || Fallback} alt={name} />
      <p>{name}</p>
      <span></span>
    </StyledStatus>
  );
};

export default UserStatus;
