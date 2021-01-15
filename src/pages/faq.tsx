import { Container, Jumbotron } from 'react-bootstrap'
import Head from 'next/head'

import Layout from '@/components/layout/LandingPage'
import FaqAccordion from '@/components/faq/FaqAccordion'

const Faq = () => {
  return (
    <Layout>
      <Head>
        <title>Faq | TuanTanah</title>
      </Head>
      <Jumbotron className="text-center">
        <h1>Bantuan Pengguna</h1>
        <span className="text-muted">
          Kami telah mengampu hal-hal yang sering ditanyakan oleh para pengguna yang lainnya
        </span>
      </Jumbotron>
      <Container className="mb-4">
        <FaqAccordion />
      </Container>
    </Layout>
  )
}

export default Faq
