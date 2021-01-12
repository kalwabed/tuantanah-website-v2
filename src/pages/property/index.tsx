import type { GetStaticProps } from 'next'
import { Container, Spinner } from 'react-bootstrap'

import Layout from '@/components/Layout/LandingPage'
import { Property as PropertyType } from '@/shared/interface'
import { getAllProperty } from '@/lib/propertyApi'
import PropertyList from '@/components/Property/List'
import SearchBar from '@/components/Property/SearchBar'

interface Props {
  properties: PropertyType[]
}

const Property = ({ properties }: Props) => {
  return (
    <Layout>
      <div className="mb-3">
        <Container>
          <SearchBar propertyLength={properties.length} />
          {!properties && (
            <span className="text-center">
              Memuat <Spinner animation="grow" />
            </span>
          )}
          {properties && <PropertyList properties={properties} />}
        </Container>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { properties } = await getAllProperty()
  return {
    props: { properties: properties || null },
    revalidate: 1
  }
}

export default Property
