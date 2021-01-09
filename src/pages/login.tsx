import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { toast } from 'react-hot-toast'
import cookies from 'js-cookie'

import LoginCard from '@/components/auth/login/Card'

const Login = () => {
  const router = useRouter()
  useEffect(() => {
    toast.dismiss()
  }, [router.isReady])

  if (cookies.get('key')) {
    router.push('/dashboard')
    return
  }

  return <LoginCard />
}

export default Login
