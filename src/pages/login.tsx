import { useEffect } from 'react'
import { toast } from 'react-hot-toast'

import LoginCard from '@/components/auth/login/Card'
import { useAuthContext } from '@/contexts/AuthContext'
import AuthLoader from '@/shared/AuthLoader'

const Login = () => {
  const { user } = useAuthContext()

  useEffect(() => {
    toast.dismiss()
    return
  }, [])

  if (user) {
    return <AuthLoader />
  }

  return <LoginCard />
}

export default Login
