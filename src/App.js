import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [countries, setCountries] = useState(null)
  const [selected, setSelected] = useState(null)

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
      <select onChange={({ target }) => setSelected(target.value)}>
        <option value="null" selected={true}>- Select a country -</option>
        {countries
          .sort((a, b) => a.name.common.localeCompare(b.name.common))
          .map(country => (
            <option key={country.name.common} value={country.name.common}>{country.name.common}</option>
          ))}
      </select>

    </>

  )
}

export default App