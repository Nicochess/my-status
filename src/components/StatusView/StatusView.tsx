import React, { useContext, useState } from "react";
import { AuthContext } from "../../store/context/AuthContext";
import { StyledView } from "./styles";

type Props = {
  status: boolean | undefined;
};

const StatusView: React.FC<Props> = ({ status }) => {
  const [online, setOnline] = useState<boolean | undefined>(status);
  const { switchStatus } = useContext(AuthContext);
  const handleClick = () => {
    setOnline((prev) => {
      switchStatus(!prev);
      return !prev;
    });
  };
  return <StyledView status={online} onClick={handleClick} />;
};

export default StatusView;
