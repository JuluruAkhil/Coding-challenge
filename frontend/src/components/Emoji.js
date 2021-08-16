import React from 'react'
import { Card, Col, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { AddCart } from '../service'

function Emoji({ emoji, notifyAdded, notifyNotAdded, notifyNotEnoughBalance }) {
  const dispatch = useDispatch()
  const { emojis } = useSelector((state) => state.emojis)
  const user = useSelector((state) => state.user)
  const { cart } = useSelector((state) => state.cart)

  function getPrice() {
    let total = 0
    for (let index = 0; index < cart.length; index++) {
      const element = cart[index]

      total += element['quantity'] * element['product']['price']
      console.log(element)
    }

    return total
  }

  function emojiToSend(key) {
    return emojis.filter((emoji) => {
      return emoji.id === key
    })[0]
  }

  function checkEmojiInCart(key) {
    for (let index = 0; index < cart.length; index++) {
      const cartItem = cart[index]
      if (cartItem.product.id === key) {
        console.log(cartItem.product.id, key)
        return true
      }
    }
    return false
  }

  function AddToCart(key) {
    if (user.balance < getPrice() + emojiToSend(key)['price']) {
      notifyNotEnoughBalance()
    } else if (checkEmojiInCart(key)) {
      notifyNotAdded(emojiToSend(key))
    } else if (user.balance >= getPrice() + emojiToSend(key)['price']) {
      notifyAdded(emojiToSend(key))
      const AddEmojiData = [
        {
          product: { ...emojiToSend(key) },
          customer: { ...user },
          quantity: 1,
        },
        user.id,
      ]
      dispatch(AddCart(AddEmojiData))
    }
  }

  return (
    <>
      <Col>
        <Card className="text-center">
          <Card.Img variant="top" src={emoji['image']} />
          <Card.Body>
            <Card.Title>{emoji.name}</Card.Title>
            <Card.Text>{emoji.description}</Card.Text>
            <div className="d-flex justify-content-around align-items-center">
              <Card.Subtitle>{`${emoji.price} points`}</Card.Subtitle>
              <Button
                onClick={() => {
                  AddToCart(emoji.id)
                }}
              >
                Add to Cart
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </>
  )
}

export default Emoji
