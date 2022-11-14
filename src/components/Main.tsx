import React from 'react'
import styled from 'styled-components'

import Container from './Container'

const Wrapper = styled.main`
  padding: 2rem 0;

  @media (min-width: 767px) {
    padding: 4rem 0;
  }
`

interface IProps {
  children: React.ReactNode
}

const Main: React.FC<IProps> = ({ children }) => {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  )
}

export default Main
