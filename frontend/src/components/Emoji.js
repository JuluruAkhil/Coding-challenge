import React from 'react'
import { Card, Col, Button } from 'react-bootstrap'

function Emoji({ emoji }) {
  return (
    <Col>
      <Card className="text-center">
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>{emoji.name}</Card.Title>
          <Card.Text>{emoji.description}</Card.Text>
          <div className="d-flex justify-content-around align-items-center">
            <Card.Subtitle>{`${emoji.price} points`}</Card.Subtitle>
            <Button>Add to Cart</Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default Emoji
