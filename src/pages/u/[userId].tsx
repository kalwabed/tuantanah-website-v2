import Layout from '@/components/layout/LandingPage'
import SearchBar from '@/components/property/SearchBar'
import { GetServerSideProps } from 'next'
import { apiPropertyByUserId } from '@/lib/propertyApi'
import { Button, Col, Container, Row } from 'react-bootstrap'
import PropertyList from '@/components/property/List'
import searchProperty from '@/helpers/searchProperty'
import PropertiesNotFound from '@/shared/PropertiesNotFound'
import { Property, User } from '@/shared/interface'
import { IoArrowBack } from 'react-icons/io5'
import Link from 'next/link'

interface Props {
  properties: Property[]
  user: User
}

const UserPropertiesPage = (props: Props) => {
  const { properties, user } = props
  const { filteredProperties, searchValue, setSearchValue } = searchProperty({ properties })
  const sumSoldOutProperties = properties.map(prop => prop.status.soldOut).filter(soldOut => soldOut === true).length

  return (
    <Layout title={user.fullName}>
      <Container>
        <Link href="/property">
          <a>
            <Button variant="link">
              <IoArrowBack /> Properti
            </Button>
          </a>
        </Link>
        <Row className="mt-2 border-bottom align-items-center">
          <Col>
            <h2>{user.fullName}</h2>
          </Col>
          <Col md={2} className="text-muted">
            <span>Properti terjual {sumSoldOutProperties}</span>
          </Col>
        </Row>
        <SearchBar
          propertyLength={filteredProperties?.length}
          setSearchValue={setSearchValue}
          searchValue={searchValue}
        />

        {!filteredProperties.length && <PropertiesNotFound payload={searchValue} />}

        <PropertyList properties={filteredProperties} />
      </Container>
      <style jsx global>
        {`
          .section-sm {
            padding-top: 1rem;
          }
        `}
      </style>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { userId } = params
  const { property } = await apiPropertyByUserId(userId as string)
  const user = property && (property as Property[])[0]?.userId

  if (!property) {
    return {
      redirect: {
        destination: '/property',
        permanent: false
      }
    }
  }

  return {
    props: { properties: property || [], user: user || null }
  }
}

export default UserPropertiesPage
