import { Dispatch, SetStateAction, useRef } from 'react'
import { Col, FormControl, Button, Badge, InputGroup, Row } from 'react-bootstrap'
import { IoIosClose } from 'react-icons/io'
import { IoCloudDoneOutline, IoCloudDownloadOutline } from 'react-icons/io5'

interface Props {
  propertyLength: number
  searchValue: string
  isFetching?: boolean
  setSearchValue: Dispatch<SetStateAction<string>>
}

const SearchBar = (props: Props) => {
  const { propertyLength, setSearchValue, searchValue, isFetching } = props
  const inputFocus = useRef()

  return (
    <div className="section section-sm">
      Cari berdasarkan lokasi
      <Row className="justify-content-between">
        <Col md={6}>
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
            <div className="d-flex justify-content-center align-items-center ml-1 text-muted">
              {isFetching ? <IoCloudDownloadOutline fontSize="1.5rem" /> : <IoCloudDoneOutline fontSize="1.5rem" />}
            </div>
          </InputGroup>
        </Col>
        <Col md="auto" className="d-sm-flex d-md-block justify-content-center">
          <Badge variant="outline-light">Ditemukan {propertyLength || 0} properti</Badge>
          <Badge variant="outline-light" className="ml-1">
            <img src="/static/logo.png" alt="logo" width="20" height="20" />
          </Badge>
        </Col>
      </Row>
    </div>
  )
}

export default SearchBar
