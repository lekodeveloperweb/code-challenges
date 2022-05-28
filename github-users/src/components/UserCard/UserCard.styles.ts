import styled from "styled-components"
import { ContainerWithShadow, DefaultContainer } from "../../styles"

export const Container = styled(ContainerWithShadow)`
  max-height: 85vh;
  min-height: 20%;
  margin-top: 5%;
  border-radius: 0.5rem;
  padding: 1rem 1.2rem;
  flex-direction: column;
`

export const Header = styled(DefaultContainer)`
  margin-bottom: 2rem;
  height: max-content;
`

export const CardImage = styled.img`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  border: 2px solid #c1c1c1;
  margin-right: 2rem;
`

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: max-content;
  & > * {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
`

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
`

export const SubTitle = styled.span`
  font-size: 1rem;
  font-weight: lighter;
  font-style: italic;
  margin: 0 0.5rem;
`

export const Description = styled.p``

export const ReposContainer = styled(DefaultContainer)`
  max-height: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: max-content;
  overflow-y: auto;
`

export const Repos = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.3rem 0;
  & > * {
    margin-top: 0.2rem;
    margin-bottom: 0.2rem;
  }
`

export const Svg = styled.svg`
  height: 1.3rem;
  stroke: #c2c2c2;
  stroke-width: 2;
  fill: none;
`

export const Items = styled(DefaultContainer)`
  height: max-content;
  & > * {
    margin-right: 0.5rem;
  }
`
