import { Jumbotron } from 'react-bootstrap'
import Head from 'next/head'

import Layout from '@/components/Layout/LandingPage'

const Faq = () => {
  return (
    <Layout>
      <Head>
        <title>Faq | TuanTanah</title>
      </Head>
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
