import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    list-style: none;
    text-decoration:none;
  }

  :root {
    --primary0: #68D1E7;
    --primary100: #A4E3F0;
    --primary200: #C2ECF5;
    --secondary0: #FA6900;
    --secondary100: #F28631;
    --grey0: #000000;
    --grey100: #1D1D1D;
    --grey200: #C0C0C0;
    --grey300: #F1F1F1;
    --sucess: #3FE864;
    --negative: #E83F5B;
  }

  body {
    background-color: var(--primary200);
  }

  input, button, label, select, h1, h2, h3, h4, h5, h6 {
  color: var(--grey0);
  }
`;
