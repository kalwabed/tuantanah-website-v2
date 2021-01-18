import type { DefaultSeoProps } from 'next-seo'
import config from 'site-config'

const seo: DefaultSeoProps = {
  title: 'Home',
  titleTemplate: `%s | ${config.appName}`,
  description: config.description,
  canonical: config.baseUrl,
  openGraph: {
    site_name: config.appName,
    type: 'website',
    description: config.description,
    title: config.appName,
    url: config.baseUrl
  }
}

export default seo
