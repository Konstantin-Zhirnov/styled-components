export interface ICountry {
  name: string
  capital: string
  region: string
  population: number
  flags: {
    svg: string
    png: string
  }
  independent: boolean
}

type CurrenciesType = Record<'code' | 'name' | 'symbol', string>

type LanguagesType = Record<'iso639_1' | 'iso639_2' | 'name' | 'nativeName', string>

export interface ICountryInfo {
  name: string
  nativeName: string
  flags: {
    svg: string
    png: string
  }
  capital: string
  population: number
  region: string
  subregion: string
  topLevelDomain: string[]
  currencies: CurrenciesType[]
  languages: LanguagesType[]
  borders: string[]
}
