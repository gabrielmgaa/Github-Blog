import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
  }

  body{
    background-color: ${props => props.theme['base-background']};
    color: ${props => props.theme['base-text']};
  }

  /* svg{
    font-size: 1.2rem;
  } */

  body,input,button{
    font-size: 1.6rem;
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
  }
`