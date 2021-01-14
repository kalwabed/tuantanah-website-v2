import { Container, Spinner } from 'react-bootstrap'

import Layout from '@/components/Layout/LandingPage'
import sdk from '@/sdk/property'
import PropertyList from '@/components/Property/List'
import SearchBar from '@/components/Property/SearchBar'
import { useState } from 'react'
import AuthLoader from '@/shared/AuthLoader'

const Property = () => {
  const [searchValue, setSearchValue] = useState('')

  const { properties, isFetching, isLoading } = sdk.getAllProperties()

  const filteredProperties =
    properties &&
    properties
      .sort((a, b) => Number(new Date(b.createdAt)) - Number(new Date(a.createdAt)))
      .filter(property => property.location.display.toLowerCase().includes(searchValue.toLowerCase()))

  return (
    <Layout>
      <div className="mb-3">
        <Container>
          <SearchBar
            isFetching={isFetching}
            propertyLength={filteredProperties?.length}
            setSearchValue={setSearchValue}
            searchValue={searchValue}
          />
          {isLoading && <AuthLoader />}
          {!filteredProperties?.length && !isLoading && (
            <span className="my-2 py-3">Tidak ada properti yang ditemukan dengan kata kunci "{searchValue}"</span>
          )}
          {filteredProperties && <PropertyList properties={filteredProperties} />}
        </Container>
      </div>
    </Layout>
  )
}

export default Property
