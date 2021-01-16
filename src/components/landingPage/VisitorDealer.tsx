import { Card, Row, Col, Container, Button, Spinner } from 'react-bootstrap'
import { Fade } from 'react-awesome-reveal'
import { IoIosArrowDropright, IoMdLogIn } from 'react-icons/io'
import Link from 'next/link'
import LazyLoad from 'react-lazyload'
import content from './content'

const VisitorDealer = ({ refVisitorDealer }: { refVisitorDealer: any | null }) => {
  return (
    <div className="section section-lg bg-dark text-white" ref={refVisitorDealer}>
      <Container>
        <Row className="text-center mb-5">
          <Col lg={10} xl={12}>
            <h2 className="h1 font-weight-light mb-4">
              Apa yang bisa anda lakukan bersama <span className="logo-font">tuantanah</span>?
            </h2>
            <p className="lead" dangerouslySetInnerHTML={{ __html: content.whatCanIDo }} />
          </Col>
        </Row>
        <Row>
          <Col className="text-center mb-3" lg={6} md={6} sm={6}>
            <Card bg="secondary" text="light">
              <Card.Body className="p-5">
                <h3 className="h2 font-weight-bold">Visitor</h3>
                <LazyLoad offset={80} once placeholder={<Spinner animation="border" />} height={150}>
                  <Fade direction="up">
                    <img src={content.assets.visitor} alt="visitor illustration" width="210" height="210" />
                  </Fade>
                </LazyLoad>
                <div className="text-justify">
                  <p className="mt-2">{content.asVisitor}</p>
                  <Link href="/property">
                    <Button variant="success" size="sm">
                      Menuju Properti <IoIosArrowDropright />
                    </Button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col className="text-center" md={6} sm={6} lg={6}>
            <Card bg="secondary" text="light">
              <Card.Body className="p-5">
                <h3 className="h2 font-weight-bold">Dealer</h3>
                <LazyLoad offset={80} once placeholder={<Spinner animation="border" />} height={150}>
                  <Fade direction="up">
                    <img src={content.assets.dealer} alt="dealer illustration" width="210" height="210" />
                  </Fade>
                </LazyLoad>
                <div className="text-justify">
                  <p className="mt-2" dangerouslySetInnerHTML={{ __html: content.asDealer }} />

                  <Link href="/login">
                    <Button size="sm" variant="success">
                      Masuk <IoMdLogIn />
                    </Button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default VisitorDealer
