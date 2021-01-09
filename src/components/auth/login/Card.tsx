import AuthCustomStyle from '@/shared/AuthCustomStyle'
import { Row, Card } from 'react-bootstrap'

import LoginForm from './Form'

const LoginCard = () => {
  return (
    <section className="h-100">
      <Row className="justify-content-md-center h-100">
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
      <AuthCustomStyle />
    </section>
  )
}

export default LoginCard
