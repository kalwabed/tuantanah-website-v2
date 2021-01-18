import { useEffect } from 'react'
import { toast } from 'react-hot-toast'

import LoginCard from '@/components/auth/login/Card'
import { useAuthContext } from '@/contexts/AuthContext'
import AuthLoader from '@/shared/AuthLoader'
import SEO from '@/components/SEO'

const Login = () => {
  const { user } = useAuthContext()

  useEffect(() => {
    toast.dismiss()
    return
  }, [])

  if (user) {
    return <AuthLoader />
  }

  return (
    <>
      <SEO title="Masuk" />
      <LoginCard />
    </>
  )
}

export default Login
