import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus{
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme["green-500"]}
  }

  body{
    background: ${[(props) => props.theme["gray-900"]]};
    color: ${[(props) => props.theme["gray-300"]]};
    -webkit-font-smoothing: antialiased;
    max-width: 74rem;
    height: calc(100vh - 10rem);
    margin: 5rem;

    background: ${(props) => props.theme["gray-800"]};
    border-radius: 8px;

    display: flex;
    flex-direction: column;
  }

  body, input, textarea, button{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem
  }

`;
