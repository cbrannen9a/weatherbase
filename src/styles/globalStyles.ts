import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: sans-serif;

    background-image: linear-gradient(
        141deg,
        #76eeba 0%,
        #1fc8db 51%,
        #2cb5e8 75%
    );
  }
`;

export default GlobalStyles;
