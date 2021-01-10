import type { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { Spinner } from 'react-bootstrap'

import Layout from '@/components/Layout'
import About from '@/components/Property/detail/About'
import { getPid, getPropertyById } from '@/lib/propertyApi'
import { Property } from '@/shared/interface'
import Gallery from '@/components/Property/detail/Gallery'
import Description from '@/components/Property/detail/Description'
import Contacts from '@/components/Property/detail/Contacts'

interface Props {
  property: Property
}

const PropertyDetail = ({ property }: Props) => {
  const { isFallback } = useRouter()
  if (isFallback) {
    return (
      <span className="text-center mx-auto h2">
        Memuat data <Spinner animation="grow" />
      </span>
    )
  }
  return (
    <Layout>
      <About {...property} />
      <Gallery gallery={property.gallery} />
      <Description description={property.description} />
      <Contacts contact={property.contact} />
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getPid()

  return {
    paths: paths.map(pid => ({ params: { pid } })),
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const pid = params.pid as string
  const { property } = await getPropertyById(pid)

  return {
    props: { property }
  }
}

export default PropertyDetail
