import { useState, useEffect } from 'react'
import axios from 'axios'

import CountryList from './components/CountryList'
import CountryView from './components/CountryView'

const App = () => {
  const [countries, setCountries] = useState(null)
  const [selectedName, setSelectedName] = useState(null)

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  })

  if (countries === null) return <div>loading...</div>

  return (
    <>
      <CountryList countries={countries} setSelectedName={setSelectedName} />
      <CountryView countries={countries} selectedName={selectedName} />
    </>

  )
}

export default App