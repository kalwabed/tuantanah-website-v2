import { Fade } from 'react-awesome-reveal'
import { Row } from 'react-bootstrap'
import dynamic from 'next/dynamic'

import { Property } from '@/shared/interface'
const PropertyCard = dynamic(() => import('./Card').then(pg => pg.default))

const PropertyList = ({ properties }: { properties: Property[] }) => {
  return (
    <Row>
      <Fade className="col-6 col-md-3 mb-3" triggerOnce cascade duration={500}>
        {properties.map(property => (
          <PropertyCard {...property} key={property._id} />
        ))}
      </Fade>
    </Row>
  )
}

export default PropertyList
