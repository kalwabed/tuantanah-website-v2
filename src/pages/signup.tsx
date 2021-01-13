import SignUpCard from '@/components/auth/signUp/Card'
import { useAuthContext } from '@/contexts/AuthContext'
import AuthLoader from '@/shared/AuthLoader'
import { useEffect } from 'react'
import toast from 'react-hot-toast'

const SignUp = () => {
  const { user } = useAuthContext()
  useEffect(() => {
    toast.dismiss()
    return
  }, [])

  if (user) {
    return <AuthLoader />
  }

  return <SignUpCard />
}

export default SignUp
