import React from 'react'
import axios from 'axios'

import List from '../components/List'
import Card from '../components/Card'
import Controls from '../components/Controls'
import { ALL_COUNTRIES } from '../config'
import { ICountry } from '../types'

interface IProps {
  countries: ICountry[]
  setCountries: React.Dispatch<React.SetStateAction<ICountry[]>>
}

const HomePage: React.FC<IProps> = ({ countries, setCountries }) => {
  const [filteredCountries, setFilteredCountries] = React.useState(countries)

  const handleSearch = (search: string, region: string): void => {
    let data = [...countries]

    if (region) {
      data = data.filter((c) => c.region.includes(region))
    }

    if (search) {
      data = data.filter((c) => c.name.toLowerCase().includes(search.toLowerCase()))
    }

    setFilteredCountries(data)
  }

  React.useEffect(() => {
    if (!countries.length) axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data))
  }, [])

  React.useEffect(() => {
    handleSearch('', '')
  }, [countries])

  return (
    <>
      <Controls onSearch={handleSearch} />
      <List>
        {filteredCountries.map((c) => {
          const countryInfo = {
            img: c.flags.png,
            name: c.name,
            info: [
              {
                title: 'Population',
                description: c.population.toLocaleString(),
              },
              {
                title: 'Region',
                description: c.region,
              },
              {
                title: 'Capital',
                description: c.capital,
              },
            ],
          }

          return <Card key={c.name} {...countryInfo} />
        })}
      </List>
    </>
  )
}

export default HomePage
