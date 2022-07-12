import React, { MouseEventHandler, ReactNode } from "react";
import { StyledButton } from "./styles";

type Props = {
  children: ReactNode;
  onClick?: MouseEventHandler
};

const Button: React.FC<Props> = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
