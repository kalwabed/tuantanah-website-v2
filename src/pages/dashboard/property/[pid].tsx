import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import LazyLoad from 'react-lazyload'
import { IoMdArrowRoundBack } from 'react-icons/io'

import sdk from '@/sdk/property'
import Link from 'next/link'
import DashboardLayout from '@/components/Layout/Dashboard'
import { useAuthContext } from '@/contexts/AuthContext'
import { useRouter } from 'next/router'

const PropertyDetail = () => {
  const router = useRouter()
  const { pid } = router.query
  const { user } = useAuthContext()
  const { property, isLoading } = sdk.getPropertyById(pid as string)

  if (property && user._id !== property.userId._id) {
    return (
      <DashboardLayout>
        <Container>
          <div className="text-center">
            <h1>Anda tidak punya akses untuk melihat detail dari properti ini!</h1>
            <Link href="/dashboard" passHref>
              <Button as="a" variant="secondary">
                Kembali
              </Button>
            </Link>
          </div>
        </Container>
      </DashboardLayout>
    )
  }

  if (!user) {
    return <h5 className="text-center">Redirecting...</h5>
  }

  return (
    <DashboardLayout>
      <Container className="my-3">
        {property && (
          <Link href="/dashboard" passHref>
            <Button variant="light" size="lg" className="mb-3" as="a">
              <IoMdArrowRoundBack /> Kembali
            </Button>
          </Link>
        )}
        {user && isLoading && <h5 className="text-center">Memuat...</h5>}
        {!isLoading && !property && <h5 className="text-center">Data tidak ditemukan. Silahkan kembali ke menu</h5>}
        {/* {!isLoading && property && (
          <Row>
            <Row>
              <Col>
                <Card>
                  <LazyLoad height={100} once>
                    <Card.Img className="img-gallery" src={property.mainPicture} height={400} width="100%" />
                  </LazyLoad>
                </Card>
              </Col>
            </Row>

            <Gallery {...property} />
            <Identity {...property} />
            <Description {...property} />
          </Row>
        )} */}
      </Container>
    </DashboardLayout>
  )
}

export default PropertyDetail
