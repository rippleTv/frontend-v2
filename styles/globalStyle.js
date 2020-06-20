import { createGlobalStyle } from 'styled-components';

import normalize from './normalize';
import theme from './theme';
import media from './media';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html  {
    box-sizing:border-box;
  }


  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    width: 100%;
    font-size: ${theme.fontSizes.md};
    font-weight: 400;
    min-height: 100%;
    overflow-x: hidden;
    color: ${theme.colors.white};
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  h1 {
    font-size: ${theme.fontSizes['4xl']};
    font-weight: 700;
    ${media.md`font-size: ${theme.fontSizes['5xl']}`}
    ${media.lg`font-size: ${theme.fontSizes['6xl']}`}
  }
`;

export default GlobalStyle;
