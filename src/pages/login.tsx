import { useEffect } from 'react'
import { toast } from 'react-hot-toast'

import LoginCard from '@/components/auth/login/Card'
import useAuth from '@/utils/useAuth'

const Login = () => {
  const { checkUserSession } = useAuth()

  useEffect(() => {
    toast.dismiss()
    return
  }, [])

  checkUserSession()

  return <LoginCard />
}

export default Login
