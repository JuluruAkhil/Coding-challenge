import React, { useState } from 'react'

import { Container, Row, Col } from 'react-bootstrap'

import { useDispatch } from 'react-redux'

import { LoginUser } from '../service'

const Login = () => {
  const dispatch = useDispatch()
  const [localUser, setLocaluser] = useState({ email: null, password: null })

  const onChange = (type, value) => {
    setLocaluser({ ...localUser, [type]: value })
  }

  function loginSubmit(e) {
    e.preventDefault()
    dispatch(LoginUser(localUser))
  }

  return (
    <Container>
      <Row className="mt-5">
        <Col lg={5} md={6} sm={12} className="p-5 m-auto rounded-lg">
          <form className="shadow p-3 mb-5 bg-white rounded">
            <div className="mb-3">
              <label className="form-label" htmlFor="formBasicEmail">
                Email address
              </label>
              <input
                type="email"
                placeholder="Enter email"
                className="form-control"
                onChange={(e) => onChange('email', e.target.value)}
              />
              <small className="text-muted form-text"></small>
            </div>

            <div className="mb-3">
              <label className="form-label" htmlFor="forBasicPassword">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                className="form-control"
                onChange={(e) => onChange('password', e.target.value)}
              />
            </div>

            <button
              className="btn btn-primary"
              type="submit"
              onSubmit={loginSubmit}
            >
              Submit
            </button>
          </form>
        </Col>
      </Row>
    </Container>
  )
}

export default Login
