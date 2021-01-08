import { Property } from '@/shared/interface'

export async function getAllProperty() {
  try {
    return await (await fetch(`${process.env.ENDPOINT}/v2/v`)).json()
  } catch (err) {
    console.error(err)
  }
}

export async function getPid() {
  try {
    const { properties } = (await (await fetch(`${process.env.ENDPOINT}/v2/v`)).json()) as { properties: Property[] }
    return properties.map(prop => prop._id)
  } catch (err) {
    console.error(err)
  }
}

export async function getPropertyById(propertyId: string) {
  try {
    return await (await fetch(`${process.env.ENDPOINT}/d/property/${propertyId}`)).json()
  } catch (err) {
    console.error(err)
  }
}
