import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body,html{
        overflow-x: hidden;
    }
    *{
        padding:0;
        margin:0;
        box-sizing: border-box;
        border:0;
    }
`