/* eslint-disable react/prop-types */
import Link from 'next/link'
import { Navbar, Container, Button, Nav } from 'react-bootstrap'
import { IoIosLogIn } from 'react-icons/io'

const Header = ({ navlink = '' }) => {
  return (
    <Navbar bg="dark" variant="dark" expand="md" sticky="top" className="nav-font">
      <Container>
        <Link href="/">
          <Navbar.Brand>
            <img src="/static/logo.png" alt="logo" className="d-inline-block" width="22" height="22" />
            <span style={{ marginLeft: '2px' }} className="logo-font">
              tuantanah
            </span>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Item>
              <Link href="/">
                <a className={`nav-link mr-auto ${navlink === '/' ? 'active' : null}`}>Home</a>
              </Link>
            </Nav.Item>
            <Link href="/property">
              <a className={`nav-link mr-auto ${navlink === 'property' ? 'active' : null}`}>Property</a>
            </Link>
            <Link href="/faq">
              <a className={`nav-link mr-3 ${navlink === 'faq' ? 'active' : null}`}>Faq</a>
            </Link>
          </Nav>
          <Link href="/signin">
            <Button size="sm" className="ml-2" variant="outline-success">
              masuk sebagai penjual <IoIosLogIn />
            </Button>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
