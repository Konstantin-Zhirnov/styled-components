import React from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { IoArrowBack } from 'react-icons/io5'

import { searchByCountry } from '../config'
import Button from '../components/Button'
import Info from '../components/Info'
import { ICountryInfo } from '../types'

const Details: React.FC = () => {
  const { name } = useParams()
  const navigate = useNavigate()

  const goBack = () => navigate(-1)

  const [country, setCountry] = React.useState<ICountryInfo | null>(null)

  React.useEffect(() => {
    if (name) {
      axios.get<ICountryInfo[]>(searchByCountry(name)).then(({ data }) => setCountry(data[0]))
    }
  }, [name])

  return (
    <div>
      <Button onClick={goBack}>
        <IoArrowBack /> Back
      </Button>
      {country && <Info country={country} />}
    </div>
  )
}

export default Details
