import { Alert } from 'react-bootstrap'

const StatusPropertyAlert = ({ shm = 0 }) => {
  switch (shm) {
    case 1:
      return (
        <Alert variant="warning">
          <b>Properti dalam proses sertifikasi</b>
          <p>Dokumen anda sedang kami tinjau untuk mendapatkan label SHM</p>
        </Alert>
      )
    case 2:
      return (
        <Alert variant="primary">
          <b>Properti telah disertifikasi</b>
          <p>Sertifikasi akan meningkatkan kepercayaan calon pelanggan</p>
        </Alert>
      )
    default:
      return (
        <Alert variant="secondary">
          <b>Properti belum di sertifikasi</b>
          <p>Sertifikasi akan menarik lebih banyak calon pelanggan</p>
        </Alert>
      )
  }
}

export default StatusPropertyAlert
