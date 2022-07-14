import React, { ChangeEventHandler, forwardRef } from "react";
import { StyledInput } from "./styles";

type Props = {
  labelText: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  value?: string | number;
  name?: string;
};

const Input = forwardRef<HTMLInputElement, Props>(
  ({ labelText, onChange, value, name }, ref) => {
    return (
      <StyledInput>
        <label htmlFor={labelText}>{labelText}</label>
        <input
          id={labelText}
          ref={ref}
          onChange={onChange}
          value={value}
          name={name}
        />
      </StyledInput>
    );
  }
);

export default Input;
