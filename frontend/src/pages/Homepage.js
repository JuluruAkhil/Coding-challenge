import React, { useState, useEffect } from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'
import Emoji from '../components/Emoji'
import axios from 'axios'

function Homepage() {
  const [emojisData, setemojisData] = useState([])

  function getEmojisData() {
    axios
      .get('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.data)
      .then((data) => console.log(data))
  }

  useEffect(() => {
    getEmojisData()
  }, [])

  return (
    <Container>
      <Row>
        <Col md={{ span: 2, offset: 10 }}>
          <Card className="align-content-end justify-content-end">
            <div>dbKudosPoints: 469</div>
          </Card>
        </Col>
      </Row>
      <Row xs={1} md={3} className="g-3">
        {Array.from({ length: 10 }).map((_, idx) => (
          <Emoji />
        ))}
      </Row>
    </Container>
  )
}

export default Homepage
