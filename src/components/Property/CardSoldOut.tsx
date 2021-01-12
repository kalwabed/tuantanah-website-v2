/* eslint-disable react/prop-types */
import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { createBreakpoint } from 'react-use'

import { Property } from '@/shared/interface'
import StatusPropertyCheck from '@/helpers/StatusPropertyCheck'
import { CardImage } from './Card'

const useBreakpoints = createBreakpoint({ sm: 576, md: 768, lg: 992, xl: 1200 })

const CardSoldOut: React.FC<Property> = ({ title, mainPicture, location, size, status }) => {
  const breakpoint = useBreakpoints()
  return (
    <Card className="hover-shadow" style={{ cursor: 'not-allowed' }}>
      <CardImage src={mainPicture} className="sold" />
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
      <Card.Body className="pt-2 font-card">
        <div className="d-md-flex justify-content-between">
          <Card.Title>{size.display}</Card.Title>
          <div>
            <StatusPropertyCheck {...status} />
          </div>
        </div>
        <Card.Text className="font-weight-bold">{title}</Card.Text>
        <Card.Text className="mt-2 font-small">{location.display.split(',')[1]}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default CardSoldOut
