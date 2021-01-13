import { Row, Container, Col, Card } from 'react-bootstrap'

import { Property } from '@/shared/interface'
import { Fade } from 'react-awesome-reveal'
import Image from 'next/image'

const Gallery = ({ gallery }: Pick<Property, 'gallery'>) => {
  return (
    <div className="section mt-2">
      <Container>
        <Row>
          <Col as="h2">
            Galeri <span className="divider"></span>
          </Col>
        </Row>
        {gallery.length < 1 && (
          <Row>
            <Col xs={12} md={3}>
              <Card>
                <Card.Body className="text-center">Tidak ada gambar</Card.Body>
              </Card>
            </Col>
          </Row>
        )}

        <Row>
          <Fade className="col-12 col-md-3 my-1" direction="right" triggerOnce cascade>
            {gallery.map(img => (
              <Image
                src={img.imageUrl}
                width={50}
                height={40}
                className="img-gallery"
                layout="responsive"
                alt={img.imageUrl}
                key={img.imageUrl}
                onClick={() => window.open(img.imageUrl ? img.imageUrl : undefined, '_blank')}
              />
            ))}
          </Fade>
        </Row>
      </Container>
    </div>
  )
}

export default Gallery
