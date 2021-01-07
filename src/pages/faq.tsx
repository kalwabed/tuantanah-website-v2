import { Jumbotron } from 'react-bootstrap'
import Head from 'next/head'

import Layout from '@/components/Layout'

const Faq = () => {
  return (
    <Layout>
      <Head>
        <title>Faq | TuanTanah</title>
      </Head>
      <main className="my-3">
        <Jumbotron fluid>
          <div className="text-center">
            Anda sampai pada halaman <b>Faq</b>
          </div>
        </Jumbotron>
      </main>
    </Layout>
  )
}

export default Faq
