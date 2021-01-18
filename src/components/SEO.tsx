import { NextSeo, NextSeoProps } from 'next-seo'
import { useRouter } from 'next/router'
import siteConfig from 'site-config'

const SEO = (props?: NextSeoProps) => {
  const router = useRouter()
  const { title } = props

  return <NextSeo title={title} canonical={siteConfig.baseUrl + router.asPath} />
}

export default SEO
