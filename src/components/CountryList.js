import Form from 'react-bootstrap/Form';

const CountryList = ({ countries, setSelectedName }) => {
  return (
    <>
      <h4>Select a country from the list</h4>
      <Form.Select onChange={({ target }) => setSelectedName(target.value || null)} defaultValue={null}>
        <option value="">- Select a country -</option>
        {countries
          .sort((a, b) => a.name.common.localeCompare(b.name.common))
          .map(country => (
            <option key={country.name.common} value={country.name.common}>{country.name.common}</option>
          ))}
      </Form.Select>
    </>

  )
}

export default CountryList