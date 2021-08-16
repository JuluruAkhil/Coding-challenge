import React, { useEffect } from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'
import Emoji from '../components/Emoji'
import { GetEmojis } from '../service'
import { useSelector, useDispatch } from 'react-redux'

function Homepage() {
  const { emojis } = useSelector((state) => state.emojis)
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(GetEmojis())
  }, [dispatch])

  return (
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
            return <Emoji emoji={emoji} key={emoji.id} />
          })}
      </Row>
    </Container>
  )
}

export default Homepage
