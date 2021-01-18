import { Container, Jumbotron } from 'react-bootstrap'

import Layout from '@/components/layout/LandingPage'
import FaqAccordion from '@/components/help/FaqAccordion'

const Help = () => {
  return (
    <Layout title="Bantuan">
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

export default Help
