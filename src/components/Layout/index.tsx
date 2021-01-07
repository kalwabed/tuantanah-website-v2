import dynamic from 'next/dynamic'

const Footer = dynamic(() => import('./Footer').then(res => res.default))
const Header = dynamic(() => import('./Header').then(res => res.default))

const Index = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Index
