import Link from 'next/link'
import { Row, Col, Container, Card, Breadcrumb } from 'react-bootstrap'
import Image from 'next/image'

import StatusPropertyCheck from '@/helpers/StatusPropertyCheck'
import { Property } from '@/shared/interface'

const About = (props: Property) => {
  const { userId, title, mainPicture, location, size, price, status } = props
  if (!userId) return null
  return (
    <div className="section">
      <Container>
        <Row className="mt-3">
          <Col>
            <Breadcrumb>
              <Breadcrumb.Item>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link href="/property">
                  <a>Property</a>
                </Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item active>{title}</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={7} className="mt-4">
            <Card>
              <Image
                src={mainPicture}
                width={100}
                height={70}
                layout="responsive"
                alt={title}
                onClick={() => window.open(mainPicture, '_blank')}
                className="img-gallery card-img"
              />
            </Card>
          </Col>
          <Col className="text-wrap" xs={12} md={5}>
            <Card bg="light" border="light">
              <Card.Body>
                <div className="border-bottom">
                  <h5 className="h4">{title}</h5>
                  <p className="h6">{userId.fullName}</p>
                  <p>{location.display}</p>
                </div>
                <h2>
                  <span className="font-weight-light">{size.display}</span>
                </h2>
                <h2>
                  <span className="font-weight-light">Rp. </span>
                  {price} Juta
                </h2>
                <p>
                  <StatusPropertyCheck {...status} />
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About
