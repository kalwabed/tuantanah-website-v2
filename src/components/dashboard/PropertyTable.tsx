import { useState } from 'react'
import { Grid, _ } from 'gridjs-react'
import { Container } from 'react-bootstrap'
import { html } from 'gridjs'
import { toast } from 'react-hot-toast'
import { useQueryClient } from 'react-query'

import { Property } from '@/shared/interface'
import sdk from '@/sdk/property'
import ModalActions from './ModalActions'
import TableButtons from './TableButtons'

export interface PickProperty {
  id: string
  title: string
  type: 'remove' | 'soldOut'
}

const PropertyTable = ({ properties }: { properties: Property[] }) => {
  const [showModal, setShowModal] = useState(false)
  const { soldOut } = sdk.propertySoldOut()
  const { removeProperty } = sdk.removeProperty()

  const [pickProperty, setPickProperty] = useState<PickProperty>({ id: '', title: '', type: 'remove' })
  const { invalidateQueries } = useQueryClient()
  const newProperty = properties.filter(prop => !prop.status.soldOut)

  const handlePropertyRemove = async (id: string) => {
    const result = await removeProperty(id)
    setShowModal(false)
    if (!result.success) {
      toast.error('Ups something went wrong')
    } else {
      toast.success('Properti berhasil dihapus')
      invalidateQueries('userProperty')
    }
  }

  const handlePropertySoldOut = async (id: string) => {
    try {
      const result = await soldOut(id)
      if (!result.success) {
        toast.error('Ups! tampaknya ada kesalahan. Silahkan refresh halaman ini')
      } else {
        toast.success('Status berhasil diubah!')
      }
      setShowModal(false)
      invalidateQueries('userProperty')
    } catch (err) {
      console.error(err)
    }
  }

  const onModal = ({ id, title, type }: PickProperty) => {
    setPickProperty({ id, title, type })
    setShowModal(true)
  }

  return (
    <div className="mb-3 mx-auto wrapper">
      <style jsx>{`
        .wrapper {
          width: 90%;
        }
      `}</style>
      <ModalActions
        pickProperty={pickProperty}
        setShow={setShowModal}
        show={showModal}
        onRemove={handlePropertyRemove}
        onSoldOut={handlePropertySoldOut}
      />
      <Grid
        data={newProperty.map((prop, i) => [
          i + 1,
          prop.mainPicture,
          prop.title,
          prop.size.display,
          prop.location.display,
          _(<TableButtons onModal={onModal} property={prop} />)
        ])}
        columns={[
          { name: '#', width: '1%' },
          {
            name: 'Gambar',
            formatter: cell => html(`<img src='${cell}' width='100%'/>`),
            width: '7%'
          },
          { name: 'Judul', width: 'auto' },
          { name: 'Ukuran', width: '6%' },
          { name: 'Lokasi', width: 'auto' },
          { name: 'Aksi', width: '9%' }
        ]}
        search={true}
        pagination={{ enabled: true, limit: 10 }}
      />
    </div>
  )
}

export default PropertyTable
