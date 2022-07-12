import React from "react";
import { StyledInput } from "./styles";

type Props = {
  labelText: string;
};

const Input: React.FC<Props> = ({ labelText }) => {
  return (
    <StyledInput>
      <label htmlFor={labelText}>{labelText}</label>
      <input name={labelText} type="text"/>
    </StyledInput>
  );
};

export default Input;
