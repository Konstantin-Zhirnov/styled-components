import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Tag = styled.span`
  padding: 0 1rem;
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  line-height: 1.5;
  cursor: pointer;
`

interface IProps {
  neighbor: string
}

const TagItem: React.FC<IProps> = ({ neighbor }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/country/${neighbor}`)
  }

  return (
    <Tag key={neighbor} onClick={handleClick}>
      {neighbor}
    </Tag>
  )
}

export default TagItem
