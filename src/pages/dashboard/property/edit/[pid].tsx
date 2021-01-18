import { Button, Spinner } from 'react-bootstrap'
import { IoMdArrowRoundBack } from 'react-icons/io'
import Link from 'next/link'

import sdk from '@/sdk/property'
import { useAuthContext } from '@/contexts/AuthContext'
import DashboardLayout from '@/components/layout/Dashboard'
import { useRouter } from 'next/router'
import EditPropertyForm from '@/components/dashboard/edit/Form'

const EditProperty = () => {
  const { query } = useRouter()
  const { pid } = query
  const { property, isLoading } = sdk.getPropertyById(pid as string)
  const { isLoading: provLoading, provinces } = sdk.getProvinsi(!!property)
  const { user } = useAuthContext()

  return (
    <DashboardLayout title={property?.title + ' @Edit'}>
      <div className="mt-3" />
      <Link href="/dashboard" passHref>
        <Button variant="light" size="lg" className="my-2 ml-2" as="a">
          <IoMdArrowRoundBack /> Kembali
        </Button>
      </Link>
      {isLoading && (
        <div className="text-center p-5">
          Memuat data properti...
          <Spinner variant="success" animation="grow" />
        </div>
      )}
      {/* 'memuat' yang atas dan bawah untuk menciptakan efek dinamis */}
      {provLoading && (
        <div className="text-center p-5">
          Memuat data provinsi...
          <Spinner variant="success" animation="grow" />
        </div>
      )}

      {!isLoading && !provLoading && <EditPropertyForm prop={property} dataProvinsi={provinces} user={user} />}
    </DashboardLayout>
  )
}

export default EditProperty
