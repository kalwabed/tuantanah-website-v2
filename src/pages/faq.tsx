import { Jumbotron } from 'react-bootstrap'
import Head from 'next/head'

import Layout from '@/components/Layout'
import { useAuthContext } from '@/contexts/AuthContext'

const Faq = () => {
  const { user } = useAuthContext()
  return (
    <Layout>
      <Head>
        <title>Faq | TuanTanah</title>
      </Head>
      <h1>my email:{user && user.email}</h1>
      <div className="my-3">
        <Jumbotron fluid>
          <div className="text-center">
            Anda sampai pada halaman <b>Faq</b>
          </div>
        </Jumbotron>
      </div>
    </Layout>
  )
}

export default Faq
