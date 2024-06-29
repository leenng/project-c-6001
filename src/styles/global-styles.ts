import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    /* * {font-family: 'Avenir' !important;} */
  }
  body:lang(en){
    /* font-family: 'Avenir' !important */
  }
 
  .w{
    max-width: 1200px;
    min-width: 375px;
    margin: auto;
  }

`;
