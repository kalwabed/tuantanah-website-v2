import type { GetStaticProps } from 'next'
import dynamic from 'next/dynamic'
import { Container, Spinner } from 'react-bootstrap'

import Layout from '@/components/Layout'
import { Property as PropertyType } from '@/shared/interface'
import { getAllProperty } from '@/lib/PropertyApi'
import PropertyList from '@/components/Property/List'
const SearchBar = dynamic(() => import('@/components/Property/SearchBar').then(pg => pg.default))

interface Props {
  properties: PropertyType[]
}

const Property = ({ properties }: Props) => {
  return (
    <Layout>
      <div className="mb-3">
        <Container>
          <SearchBar />
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
  const data = await getAllProperty()
  return {
    props: { properties: data.properties || null },
    revalidate: 1
  }
}

export default Property
