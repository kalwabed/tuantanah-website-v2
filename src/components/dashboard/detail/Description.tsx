import { Card, Col, Row } from 'react-bootstrap'
import ReactMarkdown from 'react-markdown/with-html'

import { Property } from '@/shared/interface'

const Description = ({ description }: Pick<Property, 'description'>) => {
  return (
    <section className="mt-3">
      <Row>
        <Col>
          <Card className="shadow-sm">
            <Card.Body>
              <Card>
                <Card.Body>
                  <ReactMarkdown source={description} escapeHtml={false} />
                </Card.Body>
              </Card>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </section>
  )
}

export default Description
