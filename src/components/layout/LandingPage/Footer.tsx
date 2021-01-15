import { Container, Row, Col } from 'react-bootstrap'

import Link from 'next/link'
import { IoLogoGithub, IoLogoInstagram } from 'react-icons/io'

const Footer = () => {
  return (
    <footer className="footer position-relative bg-dark text-light">
      <Container>
        <Row>
          <Col md={4}>
            <p className="">
              <span className="logo-font">tuantanah</span> adalah platform digital yang membantu anda mencari properti
              impian anda dengan praktis tanpa prasyarat akun atau yang lainnya.
            </p>
            <p className="m-0 font-weight-normal">Follow us</p>
            <div className="d-flex justify-content-start">
              <div className="mr-1">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light"
                  href="https://instagram.com/kalwabed"
                >
                  <IoLogoInstagram size="1.5em" />
                </a>
              </div>
              <div className="mr-1">
                <a target="_blank" rel="noopener noreferrer" className="text-light" href="https://github.com/kalwabed">
                  <IoLogoGithub size="1.3em" />
                </a>
              </div>
            </div>
          </Col>
          <Col></Col>
          <Col md={4} sm={4} className="d-none d-md-block">
            <p className="font-weight-bold ">Pages</p>
            <ul className="link-footer p-0 mb-0">
              <li>
                <Link href="/">
                  <a className="text-decoration-none text-light">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/property">
                  <a className="text-decoration-none text-light">Property</a>
                </Link>
              </li>
              <li>
                <Link href="/faq">
                  <a className="text-decoration-none text-light">Faq</a>
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="copyright">
          <Col>
            <div className="mt-2 d-flex justify-content-center align-items-center">
              <p className="font-weight-light font-small">
                Copyright © <span className="logo-font">tuantanah</span> {new Date().getFullYear()}. All rights reserved
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <style jsx global>{`
        .copyright {
          margin-top: 3.5rem;
        }
      `}</style>
    </footer>
  )
}

export default Footer
