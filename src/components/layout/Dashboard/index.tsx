import SEO from '@/components/SEO'
import Header from './Header'

const DashboardLayout = ({ children, title = '' }) => {
  return (
    <>
      <Header />
      <SEO title={title} />
      <main>{children}</main>
    </>
  )
}

export default DashboardLayout
