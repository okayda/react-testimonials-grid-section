import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@500;600&display=swap');

    *,
    *::after,
    *::before {
        padding: 0;
        margin: 0;
        box-sizing: inherit;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-family: 'Barlow Semi Condensed', sans-serif;
        box-sizing: border-box;
        background-color: ${(prop) => prop.theme.colors.light_grayish_blue};
        color: ${(prop) => prop.theme.colors.dark_blackish_blue};


    @media (min-width: ${(prop) => prop.theme.desktop}) {
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        }
    }
`;
