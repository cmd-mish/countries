import { useState, useEffect } from 'react'
import axios from 'axios'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
  }, [])

  if (countries === null) return <div>loading...</div>

  return (
    <Container fluid="md">
      <Row className="justify-content-md-center">
        <Col md={3}>
          <CountryList countries={countries} setSelectedName={setSelectedName} />
        </Col>
        <Col sm={5}>
          <CountryView countries={countries} selectedName={selectedName} />
        </Col>

      </Row>
    </Container>
  )
}

export default App