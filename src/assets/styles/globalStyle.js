import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, *::after, *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Montserrat', sans-serif;
        overflow: hidden;

        @media (max-width: 1240px) {
            overflow-y: unset;
            overflow-x: hidden;
        }
    }

    a, button {
        font-family: 'Montserrat', sans-serif;
    }
`;

export default GlobalStyle;
