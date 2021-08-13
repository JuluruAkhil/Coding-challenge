import React from 'react'
import { Container, Col, Row, Button } from 'react-bootstrap'

function Cart() {
  return (
    <Container>
      <Row>
        <Col md={{ span: 8 }}>
          <Row>
            <h1>Cart (2 items)</h1>
          </Row>
          <Row>
            <div class="d-flex justify-content-between align-items-center">
              <img
                class="img-thumbnail rounded"
                src="https://cdn1.vectorstock.com/i/thumb-large/44/70/hexagon-rocket-logo-vector-22374470.jpg"
                alt="Fast Starter"
                style={{ width: '20%' }}
              />
              <div class>
                <h5>Emoji 1</h5>
              </div>
              <div class="d-flex flex-column justify-content-around align-items-center">
                <p>
                  <span>
                    <strong id="summary">$17.99</strong>
                  </span>
                  <div class="input-group">
                    <span class="input-group-btn">
                      <button
                        type="button"
                        class="btn btn-default btn-number"
                        disabled="disabled"
                        data-type="minus"
                        data-field="quant[1]"
                      >
                        <span class="fas fa-minus"></span>
                      </button>
                    </span>
                    <input
                      type="text"
                      name="quant[1]"
                      class="form-control input-number"
                      value="1"
                      min="1"
                      max="10"
                    />
                    <span class="input-group-btn">
                      <button
                        type="button"
                        class="btn btn-default btn-number"
                        data-type="plus"
                        data-field="quant[1]"
                      >
                        <span class="fas fa-plus"></span>
                      </button>
                    </span>
                  </div>
                  <Button variant="danger">Delete</Button>
                </p>
              </div>
            </div>
          </Row>
          {/* <Row>
            <div class="d-flex justify-content-between">
              <Col>
                <img
                  class="img-thumbnail rounded"
                  src="https://cdn1.vectorstock.com/i/thumb-large/44/70/hexagon-rocket-logo-vector-22374470.jpg"
                  alt="Fast Starter"
                  style={{ width: '20%' }}
                />
              </Col>
              <div className="d-flex flex-column justify-content-around">
                <h5>Emoji 1</h5>
                <p class="mb-3 text-muted text-uppercase small">25 points</p>
              </div>
            </div>
            <div class="d-flex justify-content-between align-items-center">
              <div>
                <a
                  href="#!"
                  type="button"
                  class="card-link-secondary small text-uppercase mr-3"
                >
                  <i class="fas fa-trash-alt mr-1"></i> Remove item{' '}
                </a>
                <a
                  href="#!"
                  type="button"
                  class="card-link-secondary small text-uppercase"
                >
                  <i class="fas fa-heart mr-1"></i> Move to wish list{' '}
                </a>
              </div>
              <p class="mb-0">
                <span>
                  <strong id="summary">$17.99</strong>
                </span>
              </p>
            </div>
          </Row> */}
        </Col>
        <Col>ff</Col>
      </Row>
    </Container>
  )
}

export default Cart
