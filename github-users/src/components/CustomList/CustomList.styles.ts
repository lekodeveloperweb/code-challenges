import styled from "styled-components"
import { ContainerWithShadow } from "../../styles"
import { boxShadowColor } from "../../styles/constants"

export const ContainerList = styled(ContainerWithShadow)`
  flex-direction: column;
  border-radius: 0.5rem;
  position: absolute;
  height: 20rem;
  overflow-y: auto;
  width: 20rem;
  top: 3.2rem;
  background-color: #fff;
`
export const List = styled.ul`
  width: 100%;
`
export const ListItem = styled.li`
  padding: 0.75rem 0.5rem;
  cursor: pointer;
  &:hover {
    background-color: ${boxShadowColor};
  }
`
