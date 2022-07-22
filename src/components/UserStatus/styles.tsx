import styled from "styled-components";

type Props = {
  status: boolean;
};

export const StyledStatus = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray};

  p {
    text-align: left;
    width: 70%;
    text-transform: capitalize;
    font-weight: 400;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

  section {
    display: flex;
    justify-content: center;
    width: 15px;
    height: 15px;
  }
`;

export const Status = styled.span<Props>`
  display: block;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  background-color: ${(props) =>
    props.status ? props.theme.colors.available : props.theme.colors.busy};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;
