import { Form, Col, FormControl, Button, Badge, InputGroup } from 'react-bootstrap'
import { IoIosSearch } from 'react-icons/io'

// import { fetchAllProperty } from '../../utils/fetchAPI'

const SearchBar = () => {
  const searchOnSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault()
  }

  return (
    <section className="section section-sm">
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
          {/* <Col xs={2} md={3} className="mb-2">
            <Button onClick={onUpdate} variant="dark">
              Refresh <IoIosRepeat />
            </Button>
          </Col> */}
          <Col md="auto" className="d-sm-flex d-md-block justify-content-center">
            {/* <Button variant="outline-dark">
              <Badge variant="light">0</Badge> <IoIosHeart />
            </Button> */}
            <Badge variant="outline-light" className="mx-1">
              41 items
              {/* TODO sum the properties */}
            </Badge>
            <Badge variant="outline-light" className="mx-1">
              13 cities
            </Badge>
            <Badge variant="outline-light" className="ml-1">
              <img src="/static/logo.png" alt="logo" width="20" height="20" />
            </Badge>
          </Col>
        </Form.Row>
      </Form>
    </section>
  )
}

export default SearchBar
