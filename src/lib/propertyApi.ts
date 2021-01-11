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
