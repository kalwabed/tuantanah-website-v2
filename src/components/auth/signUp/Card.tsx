import AuthCustomStyle from '@/shared/AuthCustomStyle'
import { Container, Row, Card } from 'react-bootstrap'
import SignUpForm from './Form'

const SignUpCard = () => {
  return (
    <div className="h-100">
      <Container className="h-100">
        <Row className="justify-content-md-center h-100">
          <div className="card-wrapper">
            <div className="brand">
              <img src="/static/logo.png" alt="logo" />
            </div>
            <div className="card-fat">
              <Card.Body>
                <Card.Title as="h4">
                  Buat akun baru <span className="logo-font">tuantanah</span>
                </Card.Title>
                <SignUpForm />
              </Card.Body>
            </div>
          </div>
        </Row>
      </Container>
      <AuthCustomStyle />
    </div>
  )
}

export default SignUpCard
