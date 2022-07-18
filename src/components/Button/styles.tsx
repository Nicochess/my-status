import styled from "styled-components";

type Props = {
  disabled?: boolean
}

export const StyledButton = styled.button<Props>`
  padding: 10px;
  height: 50px;
  width: 100%;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  font-weight: 400;
  font-size: 16px;
  border: none;
  background-color: #f1f1f1;
  cursor: ${props => props.disabled ? "default" : "pointer"};
`;