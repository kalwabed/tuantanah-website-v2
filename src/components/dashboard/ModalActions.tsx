import { Modal } from 'react-bootstrap'

interface ActionProps {
  show: boolean
  setShow: (show: boolean) => void
  pickProperty: { id: string; title: string; type: 'soldOut' | 'remove' }
  onRemove?: (id: string) => void
  onSoldOut?: (id: string) => void
}

const ModalActions = (props: ActionProps) => {
  const { pickProperty, setShow, show } = props
  return (
    <Modal show={show} backdrop="static">
      <Modal.Header closeButton onHide={() => setShow(false)}>
        {pickProperty.type === 'soldOut' ? 'Properti sudah terjual' : 'Hapus properti'}
      </Modal.Header>
      <Modal.Body>
        {pickProperty.type === 'soldOut' ? (
          <>
            Properti <b>{pickProperty.title}</b> akan ditayangkan pada halaman <i>Property</i> dengan status sudah
            terjual/sold out.
          </>
        ) : (
          <>
            Apakah anda yakin ingin menghapus properti <b>{pickProperty.title}</b> dari sistem?
          </>
        )}
      </Modal.Body>
      <hr />
      <Modal.Footer>
        <div className="d-flex justify-content-end">
          <button className="btn btn-secondary" onClick={() => setShow(false)}>
            Batal
          </button>
          {pickProperty.type === 'soldOut' ? (
            <button className="ml-1 btn btn-success" onClick={() => handleSoldOut(pickProperty.id)}>
              Terjual
            </button>
          ) : (
            <button className="ml-1 btn btn-danger" onClick={() => handleRemove(pickProperty.id)}>
              Hapus
            </button>
          )}
        </div>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalActions
