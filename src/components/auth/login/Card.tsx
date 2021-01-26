import AuthCustomStyle from '@/shared/AuthCustomStyle'
import { Row, Card, Container } from 'react-bootstrap'

import LoginForm from './Form'

const LoginCard = () => {
  return (
    <section>
      <AuthCustomStyle />
      <Container>
        <Row className="justify-content-md-center">
          <div className="card-wrapper">
            <div className="brand">
              <img src="/static/logo.png" alt="logo" />
            </div>
            <div className="card-fat">
              <Card.Body>
                <Card.Title as="h4">Masuk</Card.Title>
                <LoginForm />
              </Card.Body>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  )
}

export default LoginCard
