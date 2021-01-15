import { Navbar, Container } from 'react-bootstrap'
import Link from 'next/link'

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Container className="justify-content-center">
        <Link href="/dashboard">
          <a>
            <Navbar.Brand>
              <img src="/static/logo.png" alt="logo" className="d-inline-block" width="22" height="22" />
              <span className="logo-font">tuantanah</span>
              dashboard
            </Navbar.Brand>
          </a>
        </Link>
      </Container>
      <style jsx>{`
        .logo-font {
          margin-left: 0.2rem;
          margin-right: 0.3rem;
        }
      `}</style>
    </Navbar>
  )
}

export default Header
