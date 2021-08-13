import React from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'
import Emoji from '../components/Emoji'

function Homepage() {
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
