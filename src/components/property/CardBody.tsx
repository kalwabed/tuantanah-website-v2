import StatusPropertyCheck from '@/helpers/StatusPropertyCheck'
import Link from 'next/link'
import { Card } from 'react-bootstrap'

interface Props {
  _id?: string
  size: { display: string }
  title: string
  location: { display: string }
  status: {
    shm: number
    negotiation: boolean
    soldOut: boolean
  }
}

const CardBody = (props: Props) => {
  const { location, size, title, status, _id } = props
  return (
    <Card.Body className="pt-2 font-card">
      <div className="d-md-flex justify-content-between">
        <Card.Title>{size.display}</Card.Title>
        <div>
          <StatusPropertyCheck {...status} />
        </div>
      </div>
      {!status.soldOut ? (
        <Link href={`/property/${_id}`}>
          <a style={{ color: '#212529' }}>
            <Card.Text className="h6 font-weight-bold stretched-link text-reset">{title}</Card.Text>
          </a>
        </Link>
      ) : (
        <Card.Text className="h6 font-weight-bold">{title}</Card.Text>
      )}
      <Card.Text className="mt-2 font-small">{location.display.split(',')[1]}</Card.Text>
    </Card.Body>
  )
}

export default CardBody
