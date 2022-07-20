import styled from "styled-components";

export const StyledInput = styled.div<{ type?: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  position: relative;

  label {
    font-weight: 500;
    margin: 0 0 10px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  input {
    height: 50px;
    border-radius: 5px;
    border: 1px solid #000;
  }

  input[type="file"]::-webkit-file-upload-button {
    visibility: hidden;
  }

  input[type="file"] {
    height: 103px;
    width: 103px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    z-index: 1;
  }

  img {
    position: absolute;
    top: 2px;
    height: 103px;
    width: 103px;
    background-size: cover;
    object-fit: cover;
    border-radius: 50%;
    cursor: pointer;
    z-index: 0;
  }
`;
