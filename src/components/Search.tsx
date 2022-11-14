import React from 'react'
import styled from 'styled-components'

import { IoSearch } from 'react-icons/io5'

const InputContainer = styled.label`
  background-color: var(--colors-ui-base);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;

  border-radius: var(--radii);
  box-shadow: var(--shadow);
  width: 100%;
  margin-bottom: 1rem;

  @media (min-width: 767px) {
    margin-bottom: 0;
    width: 280px;
  }
`

const Input = styled.input.attrs({
  type: 'search',
  placeholder: 'Search for a country...',
})`
  margin-left: 2rem;
  border: none;
  outline: none;
  color: var(--color-text);
  background-color: var(--colors-ui-base);
`

interface IProps {
  search: string
  setSearch: (value: ((prevState: string) => string) | string) => void
}

const Search: React.FC<IProps> = ({ search, setSearch }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  return (
    <InputContainer>
      <IoSearch />
      <Input onChange={handleChange} value={search} name="search" />
    </InputContainer>
  )
}

export default Search
