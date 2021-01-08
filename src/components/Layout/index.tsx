import dynamic from 'next/dynamic'

const Footer = dynamic(() => import('./Footer').then(res => res.default))
const Header = dynamic(() => import('./Header').then(res => res.default))

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
