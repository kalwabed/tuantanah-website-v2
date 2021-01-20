import { Property } from '@/shared/interface'
import { FcDataBackup } from 'react-icons/fc'
import { fetcher } from './apiConfig'

export interface ServerResponseAfterTransaction {
  response: {
    msg: string
    errorCode: number
  }
  token: string
  msg: string
  error: string
  success: boolean
}

export async function apiGetAllProperties() {
  try {
    return await fetcher({ method: 'get', route: '/v2/v' })
  } catch (err) {
    console.error(err)
  }
}

export async function getPid() {
  try {
    const { properties } = (await fetcher({ method: 'get', route: '/v2/v' })) as { properties: Property[] }
    return properties.map(prop => prop._id)
  } catch (err) {
    console.error(err)
  }
}

export async function getPropertyById(propertyId: string) {
  try {
    return await fetcher({ route: `/v/property/${propertyId}`, method: 'get' })
  } catch (err) {
    console.error(err)
  }
}

export async function getPropertyByUserId(userId: string) {
  try {
    return await fetcher({ route: `/d/property/u/${userId}`, method: 'get' })
  } catch (err) {
    console.error(err)
  }
}

interface ApiResponse {
  success: boolean
}

export async function propertySoldOut(propertyId: string): Promise<ApiResponse> {
  try {
    return await fetcher({ route: '/d/property/soldout', method: 'put', data: { id: propertyId } })
  } catch (err) {
    console.error(err)
  }
}
// TODO: change function names to more like sense
export async function removeProperty(propertyId: string): Promise<ApiResponse> {
  try {
    return await fetcher({ route: `/d/property/${propertyId}`, method: 'delete' })
  } catch (err) {
    throw new Error('[Error]: propertyApi (53)')
  }
}

export async function apiPropertyById(propertyId: string): Promise<{ property: Property; success: boolean }> {
  try {
    return await fetcher({ route: `/v/property/${propertyId}`, method: 'get' })
  } catch (err) {
    throw new Error('[Error]: apiPropertyById (61)')
  }
}

export const apiKotaByProv = async (provId: number) => {
  return await (await fetch(`https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${provId}`)).json()
}

export const apiProvinsi = async () => {
  return await (await fetch('https://dev.farizdotid.com/api/daerahindonesia/provinsi')).json()
}

export const apiAddProperty = async (formData: FormData) => {
  try {
    return (await (
      await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}/d/property`, {
        method: 'post',
        body: formData
      })
    ).json()) as ServerResponseAfterTransaction
  } catch (err) {
    throw new Error(err)
  }
}

export const apiUpdateProperty = async (formData: FormData) => {
  try {
    return (await (
      await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}/d/property`, {
        method: 'put',
        body: formData
      })
    ).json()) as ServerResponseAfterTransaction
  } catch (err) {
    throw new Error(err)
  }
}

export const apiCreateCertificate = async (data: FormData) => {
  try {
    return await (
      await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}/d/certificate`, {
        method: 'post',
        body: data
      })
    ).json()
  } catch (err) {
    throw new Error(err)
  }
}
