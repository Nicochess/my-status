import React, { MouseEventHandler, ReactNode } from "react";
import { StyledSettings } from "./styles";

type Props = {
  text: string;
  Icon?: ReactNode;
  onClick?: MouseEventHandler;
};

const SettingsButton: React.FC<Props> = ({ text, Icon, onClick }) => {
  return (
    <StyledSettings onClick={onClick}>
      {text}
      {Icon}
    </StyledSettings>
  );
};

export default SettingsButton;
