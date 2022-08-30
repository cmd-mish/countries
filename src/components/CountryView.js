import Card from 'react-bootstrap/Card';

const CountryView = ({ countries, selectedName }) => {
  if (selectedName === null) return <p><i>Select a country from the list!</i></p>

  const currentCountry = countries.find(country => country.name.common === selectedName)

  if (!currentCountry) return <p><i>information unavaulable</i></p>

  return (
    <Card style={{ width: '18rem' }} className="mt-4">
      <Card.Img variant="top" src={currentCountry.flags.svg} />
      <Card.Body>
        <Card.Title>{currentCountry.name.common}</Card.Title>
        {/* <img src={currentCountry.flags.svg} alt={`flag of ${currentCountry.name.common}`} width="200px" border="1px"></img> */}
        <p>Population: {currentCountry.population?.toLocaleString('fi-FI')}</p>
        <p>{currentCountry.capital ? `Capital city: ${currentCountry.capital[0]}` : null}</p>
      </Card.Body>
    </Card>
  )
}

export default CountryView