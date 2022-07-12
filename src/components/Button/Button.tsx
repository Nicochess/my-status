import React, { ReactNode } from "react";
import { StyledButton } from "./styles";

type Props = {
  children: ReactNode;
};

const Button: React.FC<Props> = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
