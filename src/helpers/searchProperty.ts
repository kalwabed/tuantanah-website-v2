import { Property } from '@/shared/interface'
import { Dispatch, SetStateAction, useState } from 'react'

const searchProperty = ({
  properties
}: {
  properties: Property[]
}): { searchValue: string; filteredProperties: Property[]; setSearchValue: Dispatch<SetStateAction<string>> } => {
  const [searchValue, setSearchValue] = useState('')
  const filteredProperties =
    properties &&
    properties
      .sort((a, b) => Number(new Date(b.createdAt)) - Number(new Date(a.createdAt)))
      .filter(property => property.location.display.toLowerCase().includes(searchValue.toLowerCase()))

  return { filteredProperties, searchValue, setSearchValue }
}

export default searchProperty
