const CountryList = ({ countries, setSelectedName }) => {
  return (
    <select onChange={({ target }) => setSelectedName(target.value)}>
      <option value="null" selected={true}>- Select a country -</option>
      {countries
        .sort((a, b) => a.name.common.localeCompare(b.name.common))
        .map(country => (
          <option key={country.name.common} value={country.name.common}>{country.name.common}</option>
        ))}
    </select>
  )
}

export default CountryList