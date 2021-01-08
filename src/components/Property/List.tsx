import { Fade } from 'react-awesome-reveal'
import { Row } from 'react-bootstrap'
import dynamic from 'next/dynamic'

import { Property } from '@/shared/interface'
const CardSoldOut = dynamic(() => import('./CardSoldOut').then(pg => pg.default))
const CommonCard = dynamic(() => import('./Card').then(pg => pg.default))

const PropertyList = ({ properties }: { properties: Property[] }) => {
  return (
    <>
      <Row>
        <Fade className="col-6 col-md-3 mb-3" triggerOnce cascade duration={500}>
          {properties.map(el => (
            <div key={el._id}>
              {el.status.soldOut && <CardSoldOut {...el} />}
              {!el.status.soldOut && <CommonCard {...el} />}
            </div>
          ))}
        </Fade>
      </Row>
    </>
  )
}

export default PropertyList
