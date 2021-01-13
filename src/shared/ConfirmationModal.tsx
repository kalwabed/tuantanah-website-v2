import { Button, Modal } from 'react-bootstrap'

interface ConfirmModal {
  show: boolean
  setShow: (show: boolean) => void
  content: string
  title: string
  onConfirm: () => void
}

const ConfirmationModal = (props: ConfirmModal) => {
  const { show, setShow, content, onConfirm, title } = props
  return (
    <Modal show={show} backdrop="static" keyboard={false} onHide={() => setShow(false)} centered>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{content}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Batal
        </Button>
        <Button variant="primary" onClick={onConfirm}>
          Konfirmasi
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ConfirmationModal
