import 'react-quill/dist/quill.snow.css'
import { IoMdArrowRoundBack, IoMdRocket } from 'react-icons/io'
import { Container, Card, Button } from 'react-bootstrap'
import Link from 'next/link'

import AddPropertyForm from '@/components/dashboard/AddPropertyForm'
import sdk from '@/sdk/property'
import { useAuthContext } from '@/contexts/AuthContext'
import DashboardLayout from '@/components/layout/Dashboard'

const PageAddProperty = () => {
  const { user } = useAuthContext()
  const { provinces, isLoading } = sdk.getProvinsi()

  return (
    <DashboardLayout>
      <Container className="my-3">
        <Card>
          <Card.Header>Tambah properti</Card.Header>
          <Link href="/dashboard" passHref>
            <Button variant="light" size="lg" className="my-2 ml-2" as="a">
              <IoMdArrowRoundBack /> Kembali
            </Button>
          </Link>
          <Card.Body>
            {isLoading && <p>Loading...</p>}
            {!isLoading && <AddPropertyForm user={user} dataProvinsi={provinces} />}
          </Card.Body>
          <Card.Footer className="text-center">
            <IoMdRocket />
          </Card.Footer>
        </Card>
      </Container>
    </DashboardLayout>
  )
}

export default PageAddProperty
