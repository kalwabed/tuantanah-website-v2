import { ROUTE_USER_AFTER_AUTH } from '@/constants'
import { useCookie, useLocalStorage } from '@/lib/envUtil'
import { useRouter } from 'next/router'

const useAuth = () => {
  const router = useRouter()
  const isDashboard = router.asPath.split('/')[1] === 'dashboard'

  const redirectPaths = ['/login', '/signup']
  function checkUserSession() {
    if (useLocalStorage('get') && !useCookie('get')) {
      // if user already login but the session is already gone
      useLocalStorage('remove')
      router.push('/login')
    } else if (isDashboard && !useCookie('get')) {
      // if user is in the dashboard and token is expire
      router.push('/login')
    } else if (useCookie('get') && redirectPaths.includes(router.asPath)) {
      // user token is exist but user try to access auth pages
      router.push(ROUTE_USER_AFTER_AUTH)
    } else if (!useCookie('get') && isDashboard) {
      // user is try to access dashboard but without token
      router.replace('/')
    }
  }

  /**
   *
   * @param redirectPath string
   * @default '/login'
   */
  const userSignOut = (redirectPath = '/login') => {
    useCookie('remove')
    useLocalStorage('remove')
    router.replace(redirectPath || router.asPath)
  }

  return { checkUserSession, userSignOut }
}

export default useAuth
