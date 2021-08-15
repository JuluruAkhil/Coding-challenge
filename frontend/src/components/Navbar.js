import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

function NavbarComponent() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Navbar</Navbar.Brand>
        <Nav className="me-justify-content-end">
          <Nav.Link href="/profile">Profile</Nav.Link>
          <Nav.Link href="/cart">Cart</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent
