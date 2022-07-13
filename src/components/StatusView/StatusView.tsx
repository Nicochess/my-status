import React, { useState } from "react";
import { StyledView } from "./styles";

type Props = {
  status: boolean;
};

const StatusView: React.FC<Props> = ({ status }) => {
  const [online, setOnline] = useState<boolean>(status);
  return (
    <StyledView status={online} onClick={() => setOnline((prev) => !prev)} />
  );
};

export default StatusView;
