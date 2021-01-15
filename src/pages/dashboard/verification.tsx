import { Container } from 'react-bootstrap'

import { useAuthContext } from '@/contexts/AuthContext'
import sdk from '@/sdk/property'
import DashboardLayout from '@/components/layout/Dashboard'
import AuthLoader from '@/shared/AuthLoader'
import VerificationForm from '@/components/dashboard/verification/Form'

const Verification = () => {
  const { user } = useAuthContext()
  const { properties, isLoading } = sdk.getPropertyByUserID(user?._id)

  return (
    <DashboardLayout>
      <Container className="mb-4">
        {isLoading && <AuthLoader />}
        {!isLoading && <VerificationForm properties={properties} />}
      </Container>
    </DashboardLayout>
  )
}

export default Verification
