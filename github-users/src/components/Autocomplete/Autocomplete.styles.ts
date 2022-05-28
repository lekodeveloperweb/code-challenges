import styled from "styled-components"
import { DefaultContainer } from "../../styles"

export const Container = styled(DefaultContainer)`
  flex-direction: column;
  width: 33%;
  height: max-content;
  padding: 0.5rem 1rem;
  position: relative;
`
export const Input = styled.input`
  border: 1px solid lightgray;
  border-radius: 0.5rem;
  padding: 0.75rem 0.5rem;
  width: 20rem;
`
