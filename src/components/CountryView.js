const CountryView = ({ countries, selectedName }) => {
  if (selectedName === null) return <p><i>Select a country from the list above!</i></p>

  const currentCountry = countries.find(country => country.name.common === selectedName)

  return (
    <>
      <h2>{currentCountry.name.common}</h2>
      <img src={currentCountry.flags.svg} alt={`flag of ${currentCountry.name.common}`} width="200px" border="1px"></img>
      <p>Population: {currentCountry.population.toLocaleString('fi-FI')}</p>
      <p>Capital city: {currentCountry.capital[0]}</p>
    </>
  )
}

export default CountryView