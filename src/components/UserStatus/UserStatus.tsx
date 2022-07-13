import React from "react";
import { StyledStatus } from "./styles";

type Props = {
  name: string;
  status: boolean;
  profile: string;
};

const UserStatus: React.FC<Props> = ({ name, status, profile }) => {
  return (
    <StyledStatus status={status}>
      <img src={profile} alt={name} />
      <p>{name}</p>
      <span></span>
    </StyledStatus>
  );
};

export default UserStatus;
