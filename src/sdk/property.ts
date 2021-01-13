import {
  apiPropertyById,
  getPropertyByUserId as propByUserId,
  propertySoldOut as propSoldOut,
  removeProperty as rmProperty
} from '@/lib/propertyApi'
import { Property } from '@/shared/interface'
import { useState } from 'react'
import { useMutation, useQuery } from 'react-query'

function getPropertyByUserID(userId: string) {
  const [updatedAt, setUpdatedAt] = useState<Date | number>(Date.now())
  const { data, isLoading, isFetching } = useQuery(['userProperties', userId], () => propByUserId(userId), {
    onError: err => {
      console.error(err)
      alert('Tampaknya ada kesalahan saat mengambil data dari pengguna')
    },
    onSuccess: () => setUpdatedAt(Date.now())
  })
  return { properties: data?.property as Property[], isLoading, updatedAt, isFetching }
}

function propertySoldOut() {
  const { mutateAsync } = useMutation(propSoldOut, {
    onError: err => {
      console.error(err)
      throw new Error('Kesalahan saat mengubah properti')
    }
  })
  return { soldOut: mutateAsync }
}

function removeProperty() {
  const { mutateAsync } = useMutation(rmProperty, {
    onError: err => {
      console.error(err)
      throw new Error('Kesalahan saat menghapus properti')
    }
  })

  return { removeProperty: mutateAsync }
}

function getPropertyById(propertyId: string) {
  const { data, isLoading } = useQuery(['userProperty', propertyId], () => apiPropertyById(propertyId), {
    onError: err => {
      console.error(err)
      throw new Error('Kesalahan saat mengambil properti')
    }
  })

  return { property: data?.property, isLoading }
}

export default { getPropertyByUserID, getPropertyById, propertySoldOut, removeProperty }
