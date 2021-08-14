import React from 'react'

import { Container, Row, Col} from 'react-bootstrap'

const Login = () => {
    return(
            <Container >
                <Row className="mt-5">
                    <Col lg={5} md={6} sm={12} className="p-5 m-auto rounded-lg">
                        <form className="shadow p-3 mb-5 bg-white rounded">
                            <div className="mb-3" >
                                <label className="form-label" htmlFor="formBasicEmail">Email address</label>
                                <input type="email" placeholder="Enter email" className="form-control" />
                                <small className="text-muted form-text">
      
                                </small>
                            </div>

                            <div className="mb-3" >
                                <label className="form-label" htmlFor="forBasicPassword">Password</label>
                                <input type="password" placeholder="Password" className="form-control"/>
                            </div>

                            <button className="btn btn-primary" type="submit">
                                Submit
                            </button>
                        </form>
                    </Col>
                </Row>
        
            </Container>
    

    )
}

export default Login