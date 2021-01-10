import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { toast } from 'react-hot-toast'

import LoginCard from '@/components/auth/login/Card'
import useAuth from '@/utils/useAuth'

const Login = () => {
  const router = useRouter()
  const { checkUserSession } = useAuth()

  useEffect(() => {
    toast.dismiss()
    return
  }, [router.isReady])

  checkUserSession()

  return <LoginCard />
}

export default Login
