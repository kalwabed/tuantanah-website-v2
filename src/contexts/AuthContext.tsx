import { createContext, useContext } from 'react'
import jwt from 'jsonwebtoken'
import { useLocalStorage } from '@/lib/envUtil'
import useAuth from '@/utils/useAuth'

export type UserCredential = { email: string; fullName: string; _id: string }

export interface AuthCtx {
  user: UserCredential | null
}

const AuthContext = createContext<AuthCtx | undefined>(undefined)

const Provider = ({ children }) => {
  const { checkUserSession, userSignOut } = useAuth()

  function getUserCred() {
    if (typeof window === 'undefined') return null
    checkUserSession()
    const token = useLocalStorage('get')

    if (!token) return null

    const verified = jwt.verify(token, process.env.NEXT_PUBLIC_JWT_SECRET) as UserCredential

    if (verified) {
      return verified
    } else {
      userSignOut()
    }
  }

  return <AuthContext.Provider value={{ user: getUserCred() }}>{children}</AuthContext.Provider>
}

export const useAuthContext = (): AuthCtx => {
  return useContext(AuthContext)
}

export default {
  Provider,
  Consumer: AuthContext.Consumer
}
