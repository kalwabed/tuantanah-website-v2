import { useAuthContext } from '@/contexts/AuthContext'
import Link from 'next/link'
import { Badge, Button, Col, Row } from 'react-bootstrap'
import { IoIosAddCircle, IoIosCheckmarkCircle, IoIosJournal, IoIosLogOut } from 'react-icons/io'

interface StatusProps {
  onLogout: () => void
  setShowModal: (showModal: boolean) => void
  updatedAt: Date
}

const StatusBar = (props: StatusProps) => {
  const { onLogout, setShowModal, updatedAt } = props
  const { user } = useAuthContext()
  return (
    <Row>
      <Col xs={8} md={8}>
        <Link href="/dashboard/property">
          <Button className="mr-2" variant="success" size="lg">
            Tambah <IoIosAddCircle />
          </Button>
        </Link>
        <Link href="/dashboard/verification">
          <Button className="mr-2" variant="primary" size="lg">
            Verifikasi <IoIosCheckmarkCircle />
          </Button>
        </Link>
        <Button className="mr-2" variant="info" size="lg" onClick={() => setShowModal(true)}>
          Terjual <IoIosJournal />
        </Button>
      </Col>
      <Col xs={4} md={4} className="d-sm-flex d-md-block justify-content-end">
        <span>Masuk sebagai </span>
        <span className="font-weight-bold mr-1">{user.fullName}</span> |{' '}
        <Button variant="outline-secondary" size="sm" onClick={onLogout}>
          Keluar <IoIosLogOut />
        </Button>
        <Badge variant="light" as="span">
          update terakhir: {`${updatedAt.getHours()} : ${updatedAt.getMinutes()} : ${updatedAt.getSeconds()}`}
        </Badge>
      </Col>
    </Row>
  )
}

export default StatusBar
