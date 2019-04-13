import { createGlobalStyle } from "styled-components";
import { black, white } from "./variables";

export const GlobalStyle = createGlobalStyle`

/* eslint-disable */
 @import url('https://fonts.googleapis.com/css?family=Montserrat:400,900');
 /* font-family: 'Montserrat', sans-serif; */
@import url('https://fonts.googleapis.com/css?family=Bad+Script|Calligraffitti');
/* font-family: 'Bad Script', cursive;
font-family: 'Calligraffitti', cursive; */
  * {
    padding: 0;
    margin: 0;
  }

  body {
    max-width: 1440px;
    margin: 0 auto;
    font-size: 16px;
    color: ${black};
    background-color: ${white}
    box-sizing: border-box;
  }

`;
