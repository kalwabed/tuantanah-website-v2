import Layout from '@/components/layout/LandingPage'
import SearchBar from '@/components/property/SearchBar'
import { GetServerSideProps } from 'next'
import { apiPropertyByUserId } from '@/lib/propertyApi'
import { Container } from 'react-bootstrap'
import PropertyList from '@/components/property/List'
import { useState } from 'react'
import searchProperty from '@/helpers/searchProperty'

const UserPropertiesPage = ({ properties = [] }) => {
  const { filteredProperties, searchValue, setSearchValue } = searchProperty({ properties })

  return (
    <Layout title="Kalwabed Rizki | TuanTanah">
      <Container>
        <SearchBar
          propertyLength={filteredProperties?.length}
          setSearchValue={setSearchValue}
          searchValue={searchValue}
        />
        <PropertyList properties={filteredProperties} />
      </Container>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { userId } = params
  const { property } = await apiPropertyByUserId(userId as string)

  return {
    props: { properties: property }
  }
}

export default UserPropertiesPage
