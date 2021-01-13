import { Container, Spinner } from 'react-bootstrap'

const AuthLoader = () => {
  return (
    <Container>
      <div className="justify-content-center mx-auto mt-5 d-flex align-items-center">
        Memproses <Spinner animation="border" variant="success" className="ml-2" />
      </div>
    </Container>
  )
}

export default AuthLoader
