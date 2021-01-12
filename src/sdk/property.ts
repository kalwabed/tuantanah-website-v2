import {
  getPropertyByUserId as propByUserId,
  propertySoldOut as propSoldOut,
  removeProperty as rmProperty
} from '@/lib/propertyApi'
import { Property } from '@/shared/interface'
import { useState } from 'react'
import { useMutation, useQuery } from 'react-query'

function getPropertyByUserID(userId: string) {
  const dateFmt = (date): Date => new Date(date)
  const [updatedAt, setUpdatedAt] = useState<Date | null>(null)
  const { data, isLoading, dataUpdatedAt } = useQuery(['userProperties', userId], () => propByUserId(userId), {
    onError: err => {
      console.error(err)
      alert('Tampaknya ada kesalahan saat mengambil data dari pengguna')
    },
    onSuccess: () => setUpdatedAt(dateFmt(dataUpdatedAt))
  })
  return { properties: data?.property as Property[], isLoading, updatedAt }
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

export default { getPropertyByUserID, propertySoldOut, removeProperty }
