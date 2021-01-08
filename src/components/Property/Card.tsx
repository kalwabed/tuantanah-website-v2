import { Card, Button } from 'react-bootstrap'
import { IoIosHeartEmpty } from 'react-icons/io'
import Link from 'next/link'

import { Property } from '@/shared/interface'
import StatusPropertyCheck from '@/helpers/StatusPropertyCheck'

const PropertyCard: React.FC<Property> = ({ title, mainPicture, location, size, _id, status }) => {
  return (
    <Card className="hover-shadow">
      <Card.Img variant="top" src={mainPicture} width="10%" />
      <Card.Body className="pt-2 font-card">
        <div className="d-md-flex justify-content-between">
          <Card.Title>{size.display}</Card.Title>
          <div>
            <StatusPropertyCheck {...status} />
          </div>
        </div>
        <Card.Text className="font-weight-bold">{title}</Card.Text>
        <Card.Text className="mt-2 font-small">{location.display}</Card.Text>
        <div className="justify-content-between d-flex">
          <Link href={`/property/${_id}`}>
            <Button size="sm" variant="success">
              Detail
            </Button>
          </Link>
          <Button className="ml-1" variant="outline-dark" size="sm">
            <IoIosHeartEmpty />
          </Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default PropertyCard
