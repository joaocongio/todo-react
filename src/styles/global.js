import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
      font-family: 'Montserrat', sans-serif;
    }

    body {
      background-color: #222;
      color: #fff;
    }

    input, button {
      border: none;
      border-radius: 10px;
      padding: 10px;
      outline: none;
    }
    
    button {
      cursor: pointer;
    }
`