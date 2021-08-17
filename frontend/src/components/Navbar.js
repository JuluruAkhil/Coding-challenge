import React, { useEffect } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { LoginUser } from '../service'

function NavbarComponent() {
  const user = useSelector((state) => state.user)
  const { cart } = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  useEffect(() => {
    if (user.id !== null) {
      dispatch(LoginUser(user))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart])

  // style={{ backgroundColor: '#d81b60', color: '#ffffff' }}
  return (
    <Navbar style={{ backgroundColor: '#d81b60', color: '#ffffff' }}>
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          style={{ backgroundColor: '#d81b60', color: '#ffffff' }}
        >
          <img
            src="/Db-logo.png"
            width="50"
            className="d-inline-block
          align-top"
            alt="React Bootstrap logo"
          />
          dbKudosEmoji
        </Navbar.Brand>
        <Nav className="me-justify-content-end">
          <Nav.Link
            as={Link}
            to="/cart"
            style={{ backgroundColor: '#d81b60', color: '#ffffff' }}
          >
            <i class="fas fa-shopping-cart"></i> Cart
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/leaderboard"
            style={{ backgroundColor: '#d81b60', color: '#ffffff' }}
          >
            <i class="fas fa-trophy"></i> Leaderboard
          </Nav.Link>
          {user.id === null ? (
            <Nav.Link
              as={Link}
              to="/login"
              style={{ backgroundColor: '#d81b60', color: '#ffffff' }}
            >
              <i class="fas fa-sign-in-alt"></i> Login
            </Nav.Link>
          ) : (
            <>
              <Nav.Link
                as={Link}
                to="/profile"
                style={{ backgroundColor: '#d81b60', color: '#ffffff' }}
              >
                <i class="fas fa-user"></i> My Profile
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/"
                style={{ backgroundColor: '#d81b60', color: '#ffffff' }}
              >
                {`dbKudosPoints: ${user.balance}`}
              </Nav.Link>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent
