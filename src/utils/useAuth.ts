import { ROUTE_USER_AFTER_AUTH } from '@/constants'
import { useCookie } from '@/lib/auth'
import { useRouter } from 'next/router'

const useAuth = () => {
  const router = useRouter()
  const isDashboard = router.asPath.split('/')[1] === 'faq'

  function checkUserSession() {
    if (useCookie('get')) {
      if (!isDashboard) {
        router.push(ROUTE_USER_AFTER_AUTH)
      }
    } else {
      // user is not eligible or cookie is expires
      if (router.asPath !== 'login') {
        return
      } else {
        router.replace('/')
      }
    }
  }

  return { checkUserSession }
}

export default useAuth
