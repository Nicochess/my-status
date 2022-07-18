import styled from "styled-components";
import { StyledButton } from "../Button/styles";

export const StyledMenu = styled.nav`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  width: 100%;
  z-index: 2;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #939393;
  outline: 0;
`;

export const InputContainer = styled.div`
  position: absolute;
  top: 100%;
  width: 100%;
  padding: 0 10px 10px;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const SubmitInput = styled(StyledButton)`
  position: absolute;
  width: auto;
  height: 37px;
  right: 11px;
  top: 1px;
  background-color: transparent;
  box-shadow: none;
  padding: 0 15px;
`
