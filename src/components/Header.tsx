import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { IoMoon, IoMoonOutline } from 'react-icons/io5'

import Container from './Container'

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`

const Title = styled(Link).attrs({
  to: '/',
  relative: 'path',
})`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
`

const ModeSwitcher = styled.button.attrs({
  id: 'theme-button',
})`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  text-transform: capitalize;
  border: none;
  background: transparent;
`

const Header: React.FC = () => {
  const [theme, setTheme] = React.useState('light')

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')

  React.useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title>Where is the world?</Title>
          <ModeSwitcher onClick={toggleTheme}>
            {theme === 'light' ? <IoMoonOutline size="14px" /> : <IoMoon size="14px" />}{' '}
            <span style={{ marginLeft: '0.75rem' }}>{theme} Theme</span>
          </ModeSwitcher>
        </Wrapper>
      </Container>
    </HeaderEl>
  )
}

export default Header
