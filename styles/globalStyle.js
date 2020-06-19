import { createGlobalStyle } from 'styled-components';

import normalize from './normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html  {
    box-sizing:border-box;
  }

  *,
  *:before,
  *:after {
    -webkit-text-size-adjust: 100%; 
    box-sizing: inherit;
    text-rendering: optimizeLegibility;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }
`;

export default GlobalStyle;
