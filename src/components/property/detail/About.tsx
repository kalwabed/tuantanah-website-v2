import { Row, Col, Container, Card } from 'react-bootstrap'
import Image from 'next/image'

import { Property } from '@/shared/interface'
import DealerProfile from './DealerProfile'
import PropertySummary from './PropertySummary'
import NavBreadcrumb from './NavBreadcrumb'

const About = (props: Property) => {
  const { userId, title, mainPicture, location, size, price, status, updatedAt } = props

  return (
    <div className="section">
      <Container>
        <Row className="mt-3">
          <Col>
            <NavBreadcrumb title={title} />
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
                <PropertySummary
                  location={location.display}
                  price={price}
                  size={size.display}
                  status={status}
                  title={title}
                  updatedAt={new Date(updatedAt)}
                />
                <DealerProfile fullName={userId.fullName} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About
