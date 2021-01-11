import { getPropertyByUserId as propByUserId } from '@/lib/propertyApi'
import { Property } from '@/shared/interface'
import { useState } from 'react'
import { useQuery } from 'react-query'

function getPropertyByUserID(userId: string) {
  const dateFmt = (date): Date => new Date(date)
  const [updatedAt, setUpdatedAt] = useState(new Date(Date.now()))
  const { data, isLoading, dataUpdatedAt } = useQuery(['userProperties', userId], () => propByUserId(userId), {
    onError: err => {
      console.error(err)
      alert('Tampaknya ada kesalahan saat mengambil data dari pengguna')
    },
    onSuccess: () => setUpdatedAt(dateFmt(dataUpdatedAt))
  })
  return { properties: data?.property as Property[], isLoading, updatedAt }
}

export default { getPropertyByUserID }
