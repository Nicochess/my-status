import styled from "styled-components";

export const StyledInput = styled.div<{type?: string}>`
    display: flex;
    flex-direction: ${props => props.type === "file" ? "column-reverse" : "column"};
    align-items: ${props => props.type === "file" && "center"};
    justify-content: center;
    width: 100%;

    label {
        font-weight: 600;
        margin: 0 0 10px;
        margin-top: ${props => props.type === "file" && 10}px;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    input {
        height: 50px;
        border-radius: 5px;
        border: 2px solid #000;
    }

    input[type="file"]{
        height: 103px;
        width: 103px;
        border-radius: 50%;
        background-color: red;
    }

`