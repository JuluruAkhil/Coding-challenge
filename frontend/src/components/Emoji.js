import React from 'react'
import { Card, Col, Button } from 'react-bootstrap'

function Emoji() {
  return (
    <Col>
      <Card className="text-center">
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
          <div className="d-flex justify-content-around align-items-center">
            <Card.Subtitle>25 Points</Card.Subtitle>
            <Button>Add to Cart</Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default Emoji
