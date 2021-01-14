import { Card } from 'react-bootstrap'

const CardInformation = () => (
  <Card>
    <Card.Header>Perhatian</Card.Header>
    <Card.Body>
      Verifikasi <b>Sertifikat Hak Milik (SHM)</b> akan meningkatkan kepercayaan calon pelanggan kepada penyedia
      properti, dengan harus memperhatikan ketentuan-ketentuan berikut:
      <ul>
        <li>
          Sertakan foto sertifikat yang jelas, dan sertakan semua dokumen-dokumen yang dirasa perlu sesuai kaidah yang
          berlaku.
        </li>
        <li>Pastikan Anda menyertakan sertifikat yang legal, sah secara hukum, dan orisinil.</li>
        <li>
          Kami tidak tidak akan memproses sertifikat atau dokumen yang bermasalah secara hukum ataupun secara fisik.
        </li>
        <li>
          Proses verifikasi/validasi <b>Sertifikat Hak Milik (SHM)</b> setidaknya membutuhkan waktu 3x24 jam.{' '}
        </li>
        <li>Kami akan segera menghubungi Anda melalui email apabila proses validasi telah selesai.</li>
        <br />
        Jika terjadi masalah silahkan menghubungi kami melalui alamat email:{' '}
        <a href="mailto:admin@tuantanah.id">
          <b>admin@tuantanah.id</b>
        </a>
      </ul>
    </Card.Body>
  </Card>
)

export default CardInformation
