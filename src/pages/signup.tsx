import SignUpCard from '@/components/auth/signUp/Card'
import SEO from '@/components/SEO'
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

  return (
    <>
      <SEO title="Daftar" />
      <SignUpCard />
    </>
  )
}

export default SignUp
