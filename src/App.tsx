import React from 'react'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'

import Layout from './components/Layout'

import HomePage from './pages/HomePage'
import Details from './pages/Details'
import { ICountry } from './types'

const App: React.FC = () => {
  const [countries, setCountries] = React.useState<ICountry[]>([])

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage countries={countries} setCountries={setCountries} />} />
        <Route path="/country/:name" element={<Details />} />
      </Route>,
    ),
  )

  return <RouterProvider router={router} />
}

export default App
