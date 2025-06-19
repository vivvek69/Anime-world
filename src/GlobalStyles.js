import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: "Poppins", sans-serif;
    background-color: #f4f4f4;
    color: #222;
    padding: 20px;
  }
  a {
    text-decoration: none;
    color: #007bff;
    font-weight: bold;
  }
  a:hover {
    color: #0056b3;
  }
`;

export default GlobalStyle;
