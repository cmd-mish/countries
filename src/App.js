import { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Row, Col } from 'react-bootstrap';

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
    <Container fluid="md" className='mt-3'>
      <Row className="justify-content-md-center">
        <Col lg={3}>
          <CountryList countries={countries} setSelectedName={setSelectedName} />
        </Col>
        <Col lg={5}>
          <CountryView countries={countries} selectedName={selectedName} />
        </Col>

      </Row>
    </Container>
  )
}

export default App