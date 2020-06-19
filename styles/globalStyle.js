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
  }
`;

export default GlobalStyle;
