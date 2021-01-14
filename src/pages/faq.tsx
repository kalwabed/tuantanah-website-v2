import { Jumbotron } from 'react-bootstrap'
import Head from 'next/head'

import Layout from '@/components/layout/LandingPage'

const Faq = () => {
  // TODO: fill faq page with some data and interface
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
