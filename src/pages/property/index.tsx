import { Container } from 'react-bootstrap'

import Layout from '@/components/layout/LandingPage'
import sdk from '@/sdk/property'
import PropertyList from '@/components/property/List'
import SearchBar from '@/components/property/SearchBar'
import AuthLoader from '@/shared/AuthLoader'
import searchProperty from '@/helpers/searchProperty'
import PropertiesNotFound from '@/shared/PropertiesNotFound'

const PropertyPage = () => {
  const { properties, isFetching, isLoading } = sdk.getAllProperties()
  const { filteredProperties, searchValue, setSearchValue } = searchProperty({ properties })

  return (
    <Layout title="Properti">
      <div className="mb-3">
        <Container>
          <SearchBar
            isFetching={isFetching}
            propertyLength={filteredProperties?.length}
            setSearchValue={setSearchValue}
            searchValue={searchValue}
          />
          {isLoading && <AuthLoader />}

          {!filteredProperties?.length && !isLoading && <PropertiesNotFound payload={searchValue} />}

          {filteredProperties && <PropertyList properties={filteredProperties} />}
        </Container>
      </div>
    </Layout>
  )
}

export default PropertyPage
