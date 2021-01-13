import {
  apiAddProperty,
  apiKotaByProv,
  apiPropertyById,
  apiProvinsi,
  getPropertyByUserId as propByUserId,
  propertySoldOut as propSoldOut,
  removeProperty as rmProperty
} from '@/lib/propertyApi'
import { Property } from '@/shared/interface'
import { useState } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'

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
  const qClient = useQueryClient()
  const { mutateAsync } = useMutation(propSoldOut, {
    onError: err => {
      console.error(err)
      throw new Error('Kesalahan saat mengubah properti')
    },
    onSuccess: () => {
      qClient.invalidateQueries('userProperties')
    }
  })
  return { soldOut: mutateAsync }
}

function removeProperty() {
  const qClient = useQueryClient()
  const { mutateAsync } = useMutation(rmProperty, {
    onError: err => {
      console.error(err)
      throw new Error('Kesalahan saat menghapus properti')
    },
    onSuccess: () => {
      qClient.invalidateQueries('userProperties')
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

function getKotaByProv(provId: number) {
  const { isFetching, isLoading, data } = useQuery(['kota', provId], () => apiKotaByProv(provId), {
    onError: err => {
      throw new Error(err.toString())
    }
  })

  return { isFetching, isLoading, cities: data }
}

function getProvinsi() {
  const { data, isLoading } = useQuery('provinsi', () => apiProvinsi(), { refetchOnMount: false })

  return { provinces: data, isLoading }
}

function addProperty() {
  const { mutateAsync, isLoading } = useMutation(apiAddProperty, {
    onError: err => {
      console.error(err)
      throw new Error('Tampaknya ada kesalahan saat menambah properti')
    }
  })

  return { mutateAsync, mutateIsLoading: isLoading }
}

export default {
  getKotaByProv,
  getProvinsi,
  addProperty,
  getPropertyByUserID,
  getPropertyById,
  propertySoldOut,
  removeProperty
}
