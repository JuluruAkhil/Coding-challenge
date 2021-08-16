import React, { useEffect } from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'
import Emoji from '../components/Emoji'
import { GetEmojis, LoginUser } from '../service'
import { useSelector, useDispatch } from 'react-redux'
import toast, { Toaster } from 'react-hot-toast'

function Homepage() {
  const { emojis } = useSelector((state) => state.emojis)
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()

  const notifyAdded = (emoji) => toast.success(`${emoji.name} Added to Cart`)
  const notifyNotAdded = (emoji) => toast.error(`${emoji.name} Already in Cart`)
  const notifyNotEnoughBalance = () =>
    toast.error(`Wallet balance not sufficent`)

  useEffect(() => {
    dispatch(GetEmojis())
    if (user.id !== null) {
      dispatch(LoginUser(user))
    }
  }, [])

  return (
    <>
      <Container>
        <Row>
          <Col md={{ span: 2, offset: 10 }}>
            <Card className="align-content-end justify-content-end">
              <div>{`dbKudosPoints: ${user.balance}`}</div>
            </Card>
          </Col>
        </Row>
        <Row xs={1} md={3} className="g-3">
          {!emojis['loading'] &&
            emojis.map((emoji) => {
              return (
                <Emoji
                  emoji={emoji}
                  key={emoji.id}
                  notifyAdded={notifyAdded}
                  notifyNotAdded={notifyNotAdded}
                  notifyNotEnoughBalance={notifyNotEnoughBalance}
                />
              )
            })}
        </Row>
      </Container>
      <Toaster />
    </>
  )
}

export default Homepage
