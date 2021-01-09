import { useMutation } from 'react-query'
import { userLogin } from '@/lib/AuthApi'

export const useLogin = () => {
  const { data, mutateAsync, isLoading } = useMutation(userLogin, {
    onSuccess: res => {
      // TODO: do some thing in here
    }
  })
  return { mutateUser: mutateAsync, user: data, isLoading }
}
