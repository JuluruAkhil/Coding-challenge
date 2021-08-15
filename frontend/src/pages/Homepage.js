import React, { useState, useEffect } from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'
import Emoji from '../components/Emoji'
import axios from 'axios'

function Homepage() {
  const [emojisData, setemojisData] = useState([
    {
      id: 1,
      name: 'p1',
      description: 'prod1',
      price: 10.0,
    },
    {
      id: 2,
      name: 'p2',
      description: 'prod2',
      price: 10.0,
    },
    {
      id: 3,
      name: 'p3',
      description: 'prod3',
      price: 10.0,
    },
    {
      id: 4,
      name: 'p4',
      description: 'prod4',
      price: 10.0,
    },
    {
      id: 5,
      name: 'p5',
      description: 'prod5',
      price: 10.0,
    },
    {
      id: 6,
      name: 'p6',
      description: 'prod6',
      price: 10.0,
    },
    {
      id: 7,
      name: 'p7',
      description: 'prod7',
      price: 10.0,
    },
    {
      id: 8,
      name: 'p8',
      description: 'prod8',
      price: 10.0,
    },
    {
      id: 9,
      name: 'p9',
      description: 'prod9',
      price: 10.0,
    },
    {
      id: 10,
      name: 'p10',
      description: 'prod10',
      price: 10.0,
    },
  ])

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
        {emojisData.map((emoji) => {
          return <Emoji emoji={emoji} key={emoji['id']} />
        })}
      </Row>
    </Container>
  )
}

export default Homepage
