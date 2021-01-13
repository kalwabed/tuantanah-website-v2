import Header from './Header'

const DashboardLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}

export default DashboardLayout
