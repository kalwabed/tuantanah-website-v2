import Image from 'next/image'
import { Card, Col, Row } from 'react-bootstrap'

const MainPicture = ({ picture = '' }) => {
  return (
    <Row>
      <Col>
        <Card>
          <Image
            width={78}
            height={30}
            layout="responsive"
            alt={picture}
            src={picture}
            className="img-gallery card-img"
          />
        </Card>
      </Col>
    </Row>
  )
}

export default MainPicture
