import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        font-family: 'Lato', sans-serif;
    }

    body {
        margin: 0;
    }

    h1 {
        font-weight: 700;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
`;
