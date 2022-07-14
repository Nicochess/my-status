import React, { MouseEventHandler, ReactNode } from "react";
import { StyledButton } from "./styles";

type Props = {
  children: ReactNode;
  onClick?: MouseEventHandler;
  disabled?: boolean;
};

const Button: React.FC<Props> = ({ children, onClick, disabled }) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default Button;
