import React from "react";
import { StyledInput } from "./styles";

type Props = {
  labelText: string;
};

const Input: React.FC<Props> = ({ labelText }) => {

  return (
    <StyledInput>
      <label htmlFor={labelText}>{labelText}</label>
      <input name={labelText} id={labelText} />
    </StyledInput>
  );
};

export default Input;
