import { injectGlobal } from "styled-components";
import { black, white } from "theme/variables";

/* eslint-disable */
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Montserrat');

  
  body {
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    color: ${black};
    background-color: ${white}
  }


`;
