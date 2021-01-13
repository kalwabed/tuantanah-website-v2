import { Property } from '@/shared/interface'
import Image from 'next/image'
import { Fade } from 'react-awesome-reveal'
import { Card, Col, Row, Spinner } from 'react-bootstrap'
import LazyLoad from 'react-lazyload'

const Gallery = ({ gallery }: Pick<Property, 'gallery'>) => {
  return (
    <div className="mt-2 section">
      <Row>
        {gallery.length < 1 ? (
          <Col>
            <Card className="shadow-sm">
              <Card.Body className="text-center text-muted">
                <h6>Galeri belum ditambahkan</h6>
              </Card.Body>
            </Card>
          </Col>
        ) : (
          <Fade className="col-12 col-md-3 my-1" direction="up" triggerOnce cascade>
            {gallery.map(({ imageUrl }, i) => (
              <LazyLoad once key={i} height={50} placeholder={<Spinner animation="border" />}>
                <Card>
                  <Image
                    src={imageUrl}
                    width={45}
                    height={35}
                    layout="responsive"
                    alt={imageUrl}
                    className="img-gallery card-img"
                  />
                </Card>
              </LazyLoad>
            ))}
          </Fade>
        )}
      </Row>
    </div>
  )
}

export default Gallery
