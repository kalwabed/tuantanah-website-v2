import { Container, Card, Row, Col } from 'react-bootstrap'
import ReactMarkdown from 'react-markdown/with-html'

import { Property } from '@/shared/interface'
import LazyLoad from 'react-lazyload'

const Description = ({ description }: Pick<Property, 'description'>) => {
  return (
    <div className="section mt-3 mb-4">
      <Container>
        <Row>
          <Col as="h2">
            Deskripsi <span className="divider"></span>
          </Col>
        </Row>
        <Card className="h-100 w-100">
          <LazyLoad once height={100} offset={50}>
            <Card.Body className="text-justify">
              <ReactMarkdown source={description} escapeHtml={false} />
            </Card.Body>
          </LazyLoad>
        </Card>
      </Container>
    </div>
  )
}

export default Description
