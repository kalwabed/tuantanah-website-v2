import { useAuthContext } from '@/contexts/AuthContext'
import { Property } from '@/shared/interface'
import { Modal } from 'react-bootstrap'
import SoldOutTable from './SoldOutTable'

interface ModalProps {
  setShowModal: (showModal: boolean) => void
  showModal: boolean
  isLoading: boolean
  properties: Property[]
}

const ModalShowProperty = (props: ModalProps) => {
  const { isLoading, properties, setShowModal, showModal } = props
  const { user } = useAuthContext()
  return (
    <Modal show={showModal} size="lg" scrollable backdrop="static">
      <Modal.Header closeButton onHide={() => setShowModal(false)}>
        <p className="h6">
          Daftar properti <b>{user?.fullName}</b> yang telah terjual
        </p>
      </Modal.Header>
      <Modal.Body>{!isLoading && <SoldOutTable property={properties} />}</Modal.Body>
      <Modal.Footer>
        <div className="d-flex justify-content">
          <button className="btn btn-secondary" onClick={() => setShowModal(false)}>
            Kembali
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalShowProperty
