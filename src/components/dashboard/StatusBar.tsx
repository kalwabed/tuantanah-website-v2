import Link from 'next/link'
import { useState } from 'react'
import { Badge, Button, Col, Row } from 'react-bootstrap'
import { IoIosAddCircle, IoIosCheckmarkCircle, IoIosJournal, IoIosLogOut } from 'react-icons/io'
import format from 'date-fns/format'
import { IoCloudDoneOutline, IoCloudDownloadOutline } from 'react-icons/io5'

import { useAuthContext } from '@/contexts/AuthContext'
import ConfirmationModal from '@/shared/ConfirmationModal'

interface StatusProps {
  onLogout: () => void
  setShowModal: (showModal: boolean) => void
  updatedAt: Date | number
  isFetching: boolean
}

const StatusBar = (props: StatusProps) => {
  const { onLogout, setShowModal, updatedAt, isFetching } = props
  const [showConfirmModal, setShowConfirmModal] = useState(false)
  const { user } = useAuthContext()

  return (
    <Row>
      <Col md={8}>
        <FirstBlock setShowModal={setShowModal} />
      </Col>
      <Col md={4} className="d-sm-flex d-md-block justify-content-end">
        <SecondBlock
          isFetching={isFetching}
          updatedAt={updatedAt}
          setShowConfirmModal={setShowConfirmModal}
          user={user}
        />
      </Col>
      <ConfirmationModal
        content="Apakah anda yakin akan keluar dari dashboard?"
        onConfirm={onLogout}
        show={showConfirmModal}
        setShow={setShowConfirmModal}
        title="Konfirmasi keluar"
      />
    </Row>
  )
}

const FirstBlock = ({ setShowModal }: { setShowModal: (show: boolean) => void }) => (
  <>
    <Link href="/dashboard/property" passHref>
      <Button className="mr-2" variant="success" size="lg" as="a">
        Tambah <IoIosAddCircle />
      </Button>
    </Link>
    <Link href="/dashboard/verification" passHref>
      <Button className="mr-2" variant="primary" size="lg" as="a">
        Verifikasi <IoIosCheckmarkCircle />
      </Button>
    </Link>
    <Button className="mr-2" variant="info" size="lg" onClick={() => setShowModal(true)}>
      Terjual <IoIosJournal />
    </Button>
  </>
)

const SecondBlock = ({ updatedAt, user, setShowConfirmModal, isFetching }) => (
  <>
    <span>Masuk sebagai </span>
    <span className="font-weight-bold mr-1">{user?.fullName}</span> |{' '}
    <Button variant="outline-secondary" size="sm" onClick={() => setShowConfirmModal(true)}>
      Keluar <IoIosLogOut />
    </Button>
    <Badge variant="light" as="div">
      Data terbaru pukul
      <span className="mx-1">{updatedAt && format(updatedAt, 'kk : mm : ss')}</span>
      {isFetching ? <IoCloudDownloadOutline fontSize="1.5rem" /> : <IoCloudDoneOutline fontSize="1.5rem" />}
    </Badge>
  </>
)

export default StatusBar
