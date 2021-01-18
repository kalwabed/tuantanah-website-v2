import SEO from '@/components/SEO'
import dynamic from 'next/dynamic'

const Footer = dynamic(() => import('./Footer').then(res => res.default))
const Header = dynamic(() => import('./Header').then(res => res.default))

const Layout = ({ children, title = '' }) => {
  return (
    <>
      <Header />
      <SEO title={title} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
