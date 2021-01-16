import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Container, Row, Col, Button, Spinner } from 'react-bootstrap'

import LazyLoad from 'react-lazyload'
import content from './content'

const Help = () => {
  return (
    <div className="section section-lg bg-dark text-light">
      <Container>
        <Row>
          <Col md={12} sm={12} className="text-center">
            <LazyLoad once height={100} offset={100} placeholder={<Spinner animation="border" />}>
              <Image src={content.assets.help} alt="help" width={30} height={15} layout="responsive" />
            </LazyLoad>
            <p className="mb-3 font-weight-light h5">{content.help}</p>
            <Link href="/help" passHref>
              <Button size="sm" variant="success" as="a">
                Bantuan
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Help
