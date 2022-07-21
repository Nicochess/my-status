import React, { useState } from "react";
import { StyledStatus } from "./styles";
import Fallback from "../../assets/icon.png";

type Props = {
  name: string;
  status: boolean;
  profile: string;
};

const UserStatus: React.FC<Props> = ({ name, status, profile }) => {
  const [image, setImage] = useState<string>(profile)
  const fallbackImage = () => setImage(Fallback)

  return (
    <StyledStatus status={status}>
      <img src={image} alt={name} onError={fallbackImage} />
      <p>{name}</p>
      <span></span>
    </StyledStatus>
  );
};

export default UserStatus;
