import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { useSelector } from 'react-redux'

function NavbarComponent() {
  const user = useSelector((state) => state.user)

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Navbar</Navbar.Brand>
        <Nav className="me-justify-content-end">
          <Nav.Link href="/cart">Cart</Nav.Link>
          {user.id === null ? (
            <Nav.Link href="/login">Login</Nav.Link>
          ) : (
            <Nav.Link href="/profile">My Profile</Nav.Link>
          )}
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent
