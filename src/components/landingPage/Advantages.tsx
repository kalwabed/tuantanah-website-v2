import { IoIosRocket } from 'react-icons/io'
import { Row, Col, Container } from 'react-bootstrap'
import { FaTh, FaRegHandshake } from 'react-icons/fa'
import content from './content'

const Advantages = () => {
  return (
    <div className="section section-lg">
      <Container>
        <Row className="text-center">
          <Col md={4} sm={4}>
            <IoIosRocket size="120" />
            <h2 className="my-3">Cepat</h2>
            <p className="lead ">{content.fast}</p>
          </Col>
          <Col md={4} sm={4}>
            <FaTh size="120" />
            <h2 className="my-3">Kuantitas</h2>
            <p className="lead ">{content.quantity}</p>
          </Col>
          <Col md={4} sm={4}>
            <FaRegHandshake size="120" />
            <h2 className="my-3">Terpercaya</h2>
            <p className="lead " dangerouslySetInnerHTML={{ __html: content.trusted }} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Advantages
