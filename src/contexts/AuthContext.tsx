import { createContext, useContext } from 'react'
import jwt from 'jsonwebtoken'
import { useLocalStorage } from '@/lib/envUtil'
import useAuth from '@/utils/useAuth'

type UserCredential = { email: string; fullName: string; _id: string }

export interface AuthCtx {
  user: UserCredential | null
}

const AuthContext = createContext<AuthCtx | undefined>(undefined)
// TODO: find solution to fix the 'blink' on user session on some pages
const Provider = ({ children }) => {
  const { checkUserSession } = useAuth()

  function getUserCred() {
    if (typeof window === 'undefined') return null
    checkUserSession()
    const token = useLocalStorage('get')

    if (!token) return null

    const verified = jwt.verify(token, process.env.NEXT_PUBLIC_JWT_SECRET) as UserCredential
    if (verified) {
      return verified
    } else {
      throw new Error('JWT error while get user cred')
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
