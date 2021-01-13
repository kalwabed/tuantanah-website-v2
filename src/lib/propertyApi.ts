import { Property } from '@/shared/interface'
import { fetcher } from './apiConfig'

export async function getAllProperty() {
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
    return await fetcher({ route: `/d/property/${propertyId}`, method: 'get' })
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

export async function propertySoldOut(userId: string): Promise<ApiResponse> {
  try {
    return await fetcher({ route: '/d/property/soldout', method: 'put', data: { id: userId } })
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
