import styled from "styled-components";

type Props = {
  status: boolean | undefined;
};

export const StyledView = styled.div<Props>`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  background-color: ${(props) => (props.status ? "#00FF38" : "#D12A2A")};
  border-radius: 50%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  z-index: 2;
  cursor: pointer;
`;
