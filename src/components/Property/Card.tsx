import { Card } from 'react-bootstrap'
import Link from 'next/link'
import Image from 'next/image'

import { Property } from '@/shared/interface'
import StatusPropertyCheck from '@/helpers/StatusPropertyCheck'

export const CardImage = (props: { src: string; className?: string }) => (
  <Image
    src={props.src}
    layout="responsive"
    alt="Property"
    sizes="50vh"
    width={100}
    height={80}
    className={props.className}
  />
)

const PropertyCard: React.FC<Property> = ({ title, mainPicture, location, size, _id, status }) => {
  return (
    <Card className="hover-shadow">
      <CardImage src={mainPicture} />
      <Card.Body className="pt-2 font-card">
        <div className="d-md-flex justify-content-between">
          <Card.Title>{size.display}</Card.Title>
          <div>
            <StatusPropertyCheck {...status} />
          </div>
        </div>
        <Link href={`/property/${_id}`}>
          <a>
            <Card.Text className="font-weight-bold stretched-link text-muted">{title}</Card.Text>
          </a>
        </Link>
        <Card.Text className="mt-2 font-small">{location.display}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default PropertyCard
