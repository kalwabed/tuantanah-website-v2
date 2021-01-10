import { createContext, useContext } from 'react'
import jwt from 'jsonwebtoken'
import { LOCAL_KEY } from '@/constants'
import useAuth from '@/utils/useAuth'

type UserCredential = { email: string; fullName: string; _id: string }

export interface AuthCtx {
  getUserCred: () => UserCredential
}

const AuthContext = createContext<AuthCtx | undefined>(undefined)

const Provider = ({ children }) => {
  const { checkUserSession } = useAuth()

  function getUserCred() {
    checkUserSession()
    const token = localStorage.getItem(LOCAL_KEY)
    const verified = jwt.verify(token, process.env.NEXT_PUBLIC_JWT_SECRET) as UserCredential
    if (verified) {
      return verified
    } else {
      throw new Error('JWT error while get user cred')
    }
  }

  return <AuthContext.Provider value={{ getUserCred }}>{children}</AuthContext.Provider>
}

export const useAuthContext = (): AuthCtx => {
  return useContext(AuthContext)
}

export default {
  Provider,
  Consumer: AuthContext.Consumer
}
