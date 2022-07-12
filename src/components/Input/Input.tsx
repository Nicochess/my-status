import React, { HTMLInputTypeAttribute } from "react";
import { StyledInput } from "./styles";

type Props = {
  labelText: string;
  type?: HTMLInputTypeAttribute;
};

const Input: React.FC<Props> = ({ labelText, type = "text" }) => {
  return (
    <StyledInput type={type}>
      <label htmlFor={labelText}>{labelText}</label>
      <input name={labelText} type={type} />
    </StyledInput>
  );
};

export default Input;
