import React from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'
import Emoji from '../components/Emoji'
import { useSelector } from 'react-redux'

function Homepage() {
  const { emojis } = useSelector((state) => state.emojis)
  const user = useSelector((state) => state.user)

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
        {emojis.map((emoji) => {
          return <Emoji emoji={emoji} key={emoji['id']} />
        })}
      </Row>
    </Container>
  )
}

export default Homepage
