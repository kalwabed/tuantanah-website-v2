import { Form, Col, FormControl, Button, Badge, InputGroup } from 'react-bootstrap'
import { IoIosSearch } from 'react-icons/io'

const SearchBar = ({ propertyLength = 0 }) => {
  const searchOnSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault()
  }

  return (
    <div className="section section-sm">
      <Form onSubmit={e => searchOnSubmit(e)}>
        <Form.Row className="justify-content-between">
          <Col xs={8} md={5}>
            <InputGroup>
              <FormControl placeholder="i.e Banyuwangi" />
              <InputGroup.Append>
                <Button variant="success">
                  Search <IoIosSearch />
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Col>
          <Col md="auto" className="d-sm-flex d-md-block justify-content-center">
            <Badge variant="outline-light">founds {propertyLength} property</Badge>
            <Badge variant="outline-light" className="ml-1">
              <img src="/static/logo.png" alt="logo" width="20" height="20" />
            </Badge>
          </Col>
        </Form.Row>
      </Form>
    </div>
  )
}

export default SearchBar
