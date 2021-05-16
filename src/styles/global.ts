import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }
  button{
    cursor: pointer;
  }
  input{
  text-indent: 10px;
  }
  a:link{
    text-decoration: none;
  }

`;
 
export default GlobalStyle;