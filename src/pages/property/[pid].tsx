import type { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'

import Layout from '@/components/layout/LandingPage'
import About from '@/components/property/detail/About'
import { getPid, getPropertyById } from '@/lib/propertyApi'
import { Property } from '@/shared/interface'
import Gallery from '@/components/property/detail/Gallery'
import Description from '@/components/property/detail/Description'
import Contacts from '@/components/property/detail/Contacts'
import AuthLoader from '@/shared/AuthLoader'

interface Props {
  property: Property
}

const PropertyDetail = ({ property }: Props) => {
  const { isFallback } = useRouter()
  if (isFallback) {
    return <AuthLoader />
  }
  return (
    <Layout title={property.title}>
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
    props: { property },
    revalidate: 3
  }
}

export default PropertyDetail
