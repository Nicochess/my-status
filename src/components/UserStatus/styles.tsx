import styled from "styled-components";

type Props = {
  status: boolean;
};

export const StyledStatus = styled.div<Props>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 1px solid #D9D9D9;

  p {
    text-align: left;
    width: 70%;
    font-weight: 400;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

  img {
    width: 37px;
    height: 37px;
    border-radius: 50%;
    object-fit: cover;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

  span {
    border-radius: 50%;
    width: 15px;
    height: 15px;
    background-color: ${(props) => (props.status ? "#00FF38" : "#D12A2A")};
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;
