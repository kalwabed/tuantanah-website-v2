import { Dispatch, SetStateAction, useRef } from 'react'
import { Col, FormControl, Button, Badge, InputGroup, Row } from 'react-bootstrap'
import { IoIosClose } from 'react-icons/io'

interface Props {
  propertyLength: number
  searchValue: string
  setSearchValue: Dispatch<SetStateAction<string>>
}

const SearchBar = (props: Props) => {
  const { propertyLength, setSearchValue, searchValue } = props
  const inputFocus = useRef()

  return (
    <div className="section section-sm">
      Cari berdasarkan lokasi
      <Row className="justify-content-between">
        <Col md={5}>
          <InputGroup>
            <FormControl
              ref={inputFocus}
              placeholder="cth. Banyuwangi"
              onChange={e => setSearchValue(e.target.value)}
              value={searchValue}
            />
            <InputGroup.Append>
              <Button variant="secondary" size="sm" onClick={() => setSearchValue('')} disabled={!searchValue}>
                <IoIosClose />
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Col>
        <Col md="auto" className="d-sm-flex d-md-block justify-content-center">
          <Badge variant="outline-light">ditemukan {propertyLength} properti</Badge>
          <Badge variant="outline-light" className="ml-1">
            <img src="/static/logo.png" alt="logo" width="20" height="20" />
          </Badge>
        </Col>
      </Row>
    </div>
  )
}

export default SearchBar
