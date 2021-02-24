/* eslint-disable react/prop-types */
import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { createBreakpoint } from 'react-use'
import Image from 'next/image'

import { Property } from '@/shared/interface'
import CardBody from './CardBody'

const useBreakpoints = createBreakpoint({ sm: 576, md: 768, lg: 992, xl: 1200 })

const CardImage = (props: { src: string; className?: string }) => (
  <Image
    src={props.src}
    layout="responsive"
    alt="Property"
    sizes="50vh"
    width={100}
    height={80}
    className={props.className.concat(' card-img')}
  />
)

const PropertyCard: React.FC<Property> = ({ title, mainPicture, location, size, status, _id, price }) => {
  const breakpoint = useBreakpoints()
  const { soldOut } = status

  return (
    <Card className="hover-shadow" style={{ cursor: soldOut ? 'not-allowed' : 'auto' }}>
      <CardImage src={mainPicture} className={soldOut ? 'sold' : ''} />
      {soldOut && (
        <Card.ImgOverlay>
          {breakpoint === 'sm' ? (
            <div className="text-center pt-3">
              <Button size="lg" variant="secondary" disabled>
                Sudah terjual!
              </Button>
            </div>
          ) : (
            <div className="text-center pt-5">
              <Button size="lg" variant="light" disabled>
                Sudah terjual!
              </Button>
            </div>
          )}
        </Card.ImgOverlay>
      )}
      <CardBody location={location} title={title} size={size} status={status} _id={_id} price={price} />
    </Card>
  )
}

export default PropertyCard
