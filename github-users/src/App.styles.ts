import styled, { createGlobalStyle } from "styled-components"
import { DefaultContainer } from "./styles"

export const Container = styled(DefaultContainer)`
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
`

export const GlobalStyle = createGlobalStyle({
  "*,*::before,*::after": {
    boxSizing: "border-box",
  },
  "::-webkit-scrollbar": {
    width: 0,
  },
  "input:focus": {
    outline: "none",
    "outline-offset": "0",
  },
  "*": {
    margin: 0,
    padding: 0,
    border: "none",
  },
  ul: {
    listStyle: "none",
  },
})
