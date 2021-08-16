import React, { useEffect } from 'react'
import { Container, Col, Row, Card, Button, ListGroup } from 'react-bootstrap'
import CartItem from '../components/CartItem'
import { Checkout, GetCart } from '../service'
import { useSelector, useDispatch } from 'react-redux'
import toast, { Toaster } from 'react-hot-toast'

function Cart() {
  const dispatch = useDispatch()
  const { cart } = useSelector((state) => state.cart)
  const { id, balance } = useSelector((state) => state.user)

  const notifyNotEnoughBalance = () =>
    toast.error(`Wallet balance not sufficent`)
  const notifyCheckoutSuccessful = () =>
    toast.success('Checkout Done Successfully')
  const notifyNoItemsPresent = () => toast.error('No Items Present')

  // function getCartProducts() {
  //   let orderDetails = []
  //   for (let index = 0; index < cart.length; index++) {
  //     const cartItem = cart[index]
  //     orderDetails.push({
  //       product: cartItem['product'],
  //       quantity: cartItem['quantity'],
  //     })
  //   }
  //   return orderDetails
  // }

  const clickCheckout = () => {
    if ((getQty() > 0) & (getPrice() <= balance)) {
      // let CheckoutData = {
      //   payload: {
      //     order: {
      //       customer: {
      //         id,
      //         name,
      //         balance,
      //       },
      //       amount: getPrice(),
      //     },
      //     orderDetails: getCartProducts(),
      //   },
      //   customerId: id,
      //   amount: getPrice(),
      // }
      dispatch(Checkout(id))
      notifyCheckoutSuccessful()
    } else if (getQty() <= 0) {
      notifyNoItemsPresent()
    } else {
      notifyNotEnoughBalance()
    }
  }

  useEffect(() => {
    dispatch(GetCart(id))
  }, [dispatch, id])

  function getQty() {
    let total = 0
    for (let index = 0; index < cart.length; index++) {
      const element = cart[index]

      total += element['quantity']
    }
    return total
  }

  function getPrice() {
    let total = 0
    for (let index = 0; index < cart.length; index++) {
      const element = cart[index]

      total += element['quantity'] * element['product']['price']
    }

    return total
  }

  return (
    <>
      <Container>
        <Row>
          <Col md={{ span: 8 }}>
            <Row>
              <h1>
                {`Cart
              ${getQty()} items`}
              </h1>
            </Row>
            <Row>
              {cart &&
                cart.map((cartItemData) => {
                  return (
                    <CartItem
                      cartItemData={cartItemData}
                      key={cartItemData['id']}
                      quantity={cartItemData['quantity']}
                      notifyNotEnoughBalance={notifyNotEnoughBalance}
                    />
                  )
                })}
            </Row>
          </Col>
          <Col>
            <br />
            <Card class="mb-3">
              <Card.Body>
                <h5 class="mb-3">Checkout</h5>
                <ListGroup variant="flush">
                  <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div>The total dbKudosPoints being spent</div>
                    <span>
                      <strong>{getPrice()}</strong>
                    </span>
                  </li>
                </ListGroup>
                <Button variant="primary" onClick={clickCheckout}>
                  Complete Checkout
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Toaster />
    </>
  )
}

export default Cart
