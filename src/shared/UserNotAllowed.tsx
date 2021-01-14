import DashboardLayout from '@/components/layout/Dashboard'
import Link from 'next/link'
import { Button, ButtonGroup, Container } from 'react-bootstrap'

const UserNotAllowed = () => {
  return (
    <DashboardLayout>
      <Container>
        <div className="text-center">
          <h1>Anda tidak punya akses untuk melihat detail dari properti ini!</h1>
          <Link href="/dashboard" passHref>
            <Button as="a" variant="secondary">
              Kembali
            </Button>
          </Link>
        </div>
      </Container>
    </DashboardLayout>
  )
}

export default UserNotAllowed
