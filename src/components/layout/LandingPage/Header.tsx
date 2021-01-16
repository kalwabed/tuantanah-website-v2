/* eslint-disable react/prop-types */
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Navbar, Container, Button, Nav, Dropdown, DropdownButton } from 'react-bootstrap'
import { IoIosLogIn } from 'react-icons/io'
import { useCookie } from '@/lib/envUtil'
import { useAuthContext } from '@/contexts/AuthContext'
import useAuth from '@/utils/useAuth'
import toast from 'react-hot-toast'

const Header = () => {
  const { asPath } = useRouter()
  const { user } = useAuthContext()
  const { userSignOut } = useAuth()

  const handleLogout = () => {
    userSignOut()
    toast.success('Berhasil keluar')
  }

  return (
    <Navbar bg="dark" variant="dark" expand="md" sticky="top" className="nav-font">
      <Container>
        <Link href="/">
          <a>
            <Navbar.Brand className="pointer">
              <img src="/static/logo.png" alt="logo" className="d-inline-block" width="22" height="22" />
              <span style={{ marginLeft: '2px' }} className="logo-font">
                tuantanah
              </span>
            </Navbar.Brand>
          </a>
        </Link>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Item>
              <Link href="/">
                <a className={`nav-link mr-auto ${asPath === '/' ? 'active' : null}`}>Home</a>
              </Link>
            </Nav.Item>
            <Link href="/property">
              <a className={`nav-link mr-auto ${asPath === '/property' ? 'active' : null}`}>Property</a>
            </Link>
            <Link href="/help">
              <a className={`nav-link mr-3 ${asPath === '/help' ? 'active' : null}`}>Help</a>
            </Link>
          </Nav>
          <UserButton fullName={user?.fullName} cookie={useCookie('get')} handleLogout={handleLogout} />
        </Navbar.Collapse>
      </Container>
      <style jsx>{`
        .pointer {
          cursor: pointer;
        }
      `}</style>
    </Navbar>
  )
}

const UserButton = ({ fullName = '', cookie = '', handleLogout = () => null }) =>
  cookie ? (
    <DropdownButton title={fullName.split(' ')[0]} variant="secondary">
      <Link href="/dashboard" passHref>
        <Dropdown.Item>Dashboard</Dropdown.Item>
      </Link>
      <Dropdown.Item onClick={handleLogout}>Keluar</Dropdown.Item>
    </DropdownButton>
  ) : (
    <Link href="/login">
      <Button size="sm" className="ml-2" variant="success">
        masuk sebagai penjual <IoIosLogIn />
      </Button>
    </Link>
  )

export default Header
