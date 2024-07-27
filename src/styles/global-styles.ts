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

  @keyframes fadeInDownCustom {
    from {
      opacity: 0;
      transform: translate3d(0, -40px, 0);
    }

    to {
      opacity: 1;
      transform: none;
    }
  }

  .fadeInDownCustom {
    animation-name: fadeInDownCustom;
  }
`;
