import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  a {
    cursor: pointer;
    color: inherit;
    text-decoration: none;
  }
  button {
    cursor: pointer;
    &:disabled {
      cursor: not-allowed;
    }
  }
  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

`;

export default GlobalStyle;
