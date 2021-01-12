import type { GetStaticProps } from 'next'
import { Container, Spinner } from 'react-bootstrap'

import Layout from '@/components/Layout/LandingPage'
import { Property as PropertyType } from '@/shared/interface'
import { getAllProperty } from '@/lib/propertyApi'
import PropertyList from '@/components/Property/List'
import SearchBar from '@/components/Property/SearchBar'
import { useState } from 'react'

interface Props {
  properties: PropertyType[]
}

const Property = ({ properties }: Props) => {
  const [searchValue, setSearchValue] = useState('')

  const filteredProperties = properties
    .sort((a, b) => Number(new Date(b.createdAt)) - Number(new Date(a.createdAt)))
    .filter(property => property.location.display.toLowerCase().includes(searchValue.toLowerCase()))

  return (
    <Layout>
      <div className="mb-3">
        <Container>
          <SearchBar
            propertyLength={filteredProperties.length}
            setSearchValue={setSearchValue}
            searchValue={searchValue}
          />
          {!properties && (
            <span className="text-center">
              Memuat <Spinner animation="grow" />
            </span>
          )}
          {!filteredProperties.length && (
            <span className="my-2 py-3">Tidak ada properti yang ditemukan dengan kata kunci "{searchValue}"</span>
          )}
          {properties && <PropertyList properties={filteredProperties} />}
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
