import React from 'react'
import { Container, Col, Row, Card, Button, ListGroup } from 'react-bootstrap'
import CartItem from '../components/CartItem'

function Cart() {
  return (
    <Container>
      <Row>
        <Col md={{ span: 8 }}>
          <Row>
            <h1>Cart (2 items)</h1>
          </Row>
          <Row>
            <CartItem />
          </Row>
        </Col>
        <Col>
          <Card class="mb-3">
            <Card.Body>
              <h5 class="mb-3">Checkout</h5>
              <ListGroup variant="flush">
                <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                  <div>The total dbKudosPoints being spent</div>
                  <span>
                    <strong>200</strong>
                  </span>
                </li>
              </ListGroup>
              <Button variant="primary">go to checkout</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Cart
