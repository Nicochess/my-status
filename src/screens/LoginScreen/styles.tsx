import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;
  padding: 0 20px;

  section {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 15px;
  }

  a {
    color: #000;
  }
`;
