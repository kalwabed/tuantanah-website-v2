import { COOKIE_KEY, COOKIE_EXP, LOCAL_KEY } from '@/constants'
import cookie from 'js-cookie'

export const useCookie = (mode: 'set' | 'get' | 'remove', value?: any) => {
  switch (mode) {
    case 'set':
      cookie.remove(COOKIE_KEY)
      cookie.set(COOKIE_KEY, value, { expires: COOKIE_EXP, secure: process.env.NODE_ENV === 'production' })
      break
    case 'get':
      const get = cookie.get(COOKIE_KEY)
      return get
    case 'remove':
      cookie.remove(COOKIE_KEY)
      break
    default:
      ''
      break
  }
}

export const useLocalStorage = (mode: 'set' | 'get' | 'remove', value?: any) => {
  if (typeof localStorage === 'undefined') return null
  const ls = localStorage
  switch (mode) {
    case 'set':
      ls.setItem(LOCAL_KEY, value)
      break
    case 'get':
      return ls.getItem(LOCAL_KEY)
    case 'remove':
      ls.removeItem(LOCAL_KEY)
      break
    default:
      ''
      break
  }
}
