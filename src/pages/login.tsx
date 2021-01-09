import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { toast } from 'react-hot-toast'

import LoginCard from '@/components/auth/login/Card'
import { useCookie } from '@/lib/auth'

const Login = () => {
  const router = useRouter()

  useEffect(() => {
    toast.dismiss()
    return
  }, [router.isReady])

  if (useCookie('get')) {
    // intercept user to being in login page
    router.push('/faq')
  }

  return <LoginCard />
}

export default Login
