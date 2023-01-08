import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
      font-family: 'Kumbh Sans', sans-serif;
      font-size: 1.125rem;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px transparent;
  }

  #root {
      margin: 0 auto;
  }
`