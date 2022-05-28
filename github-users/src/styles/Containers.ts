import styled from "styled-components"
import { boxShadowColor } from "./constants"

export const DefaultContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`

export const ContainerWithShadow = styled(DefaultContainer)`
  border: 1px solid ${boxShadowColor};
  -webkit-box-shadow: 0px 6px 5px 0px ${boxShadowColor};
  -moz-box-shadow: 0px 6px 5px 0px ${boxShadowColor};
  box-shadow: 0px 6px 5px 0px ${boxShadowColor};
`
