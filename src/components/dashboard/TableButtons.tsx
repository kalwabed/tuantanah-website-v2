import { Property } from '@/shared/interface'
import Router from 'next/router'
import { Button, ButtonGroup } from 'react-bootstrap'
import { IoMdCheckmark, IoMdCreate, IoMdTrash, IoMdEye } from 'react-icons/io'

import { PickProperty } from '@/components/dashboard/PropertyTable'

interface Props {
  property: Property
  onModal: ({ id, title, type }: PickProperty) => void
}

const TableButtons = (props: Props) => {
  const { onModal, property: prop } = props

  const onDetail = () => {
    Router.push(`/dashboard/property/${prop._id}`)
  }

  const onUpdate = () => {
    Router.push(`/dashboard/property/edit/${prop._id}`)
  }

  return (
    <ButtonGroup aria-label="table-actions">
      <Button size="sm" variant="info" onClick={() => onDetail()}>
        <IoMdEye />
      </Button>
      <Button size="sm" variant="warning" onClick={() => onUpdate()}>
        <IoMdCreate />
      </Button>
      <Button size="sm" variant="success" onClick={() => onModal({ id: prop._id, title: prop.title, type: 'soldOut' })}>
        <IoMdCheckmark />
      </Button>
      <Button size="sm" variant="danger" onClick={() => onModal({ id: prop._id, title: prop.title, type: 'remove' })}>
        <IoMdTrash />
      </Button>
    </ButtonGroup>
  )
}

export default TableButtons
