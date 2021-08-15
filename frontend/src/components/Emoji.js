import React from 'react'
import { Card, Col, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { AddCart } from '../service'
import toast, { Toaster } from 'react-hot-toast'

function Emoji({ emoji }) {
  const dispatch = useDispatch()
  const { emojis } = useSelector((state) => state.emojis)
  const user = useSelector((state) => state.user)

  const notify = () => toast.success(`${emoji.name} Added to Cart`)

  function AddToCart(key) {
    notify()
    const AddEmojiData = {
      product: { ...emojis[key] },
      customer: { ...user },
      quantity: 1,
    }
    dispatch(AddCart(AddEmojiData))
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
      <Toaster />
    </>
  )
}

export default Emoji
