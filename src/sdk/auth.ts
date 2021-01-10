import { useMutation } from 'react-query'

import { userLogin, userSignUp } from '@/lib/authApi'
import { useCookie, useLocalStorage } from '@/lib/envUtil'
import { v4 } from 'uuid'

export const setUserCred = (userToken: string) => {
  const token = JSON.stringify(userToken).slice(1, -1)
  // set user session and user credentials.
  // don't using this method, I couldn't recommend to implement on real apps
  useCookie('set', v4()) // as session
  useLocalStorage('set', token)
}

export const useLogin = () => {
  const { data, mutateAsync, isLoading } = useMutation(userLogin, {
    onSuccess: res => {
      setUserCred(res.token)
    }
  })
  return { mutateUser: mutateAsync, user: data, isLoading }
}

export const useSignUp = () => {
  const { data, mutateAsync, isLoading } = useMutation(userSignUp, {
    onSuccess: res => {
      setUserCred(res.token)
    }
  })

  return { mutateUserSignUp: mutateAsync, isLoading, user: data }
}
