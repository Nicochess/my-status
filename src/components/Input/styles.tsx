import styled from "styled-components";

export const StyledInput = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;

    label {
        font-weight: 600;
        margin: 0 0 10px;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    input {
        height: 50px;
        border-radius: 5px;
        border: 2px solid #000;
    }
`