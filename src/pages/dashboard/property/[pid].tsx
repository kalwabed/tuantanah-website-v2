import { Button, Container } from 'react-bootstrap'
import { IoMdArrowRoundBack } from 'react-icons/io'

import sdk from '@/sdk/property'
import Link from 'next/link'
import DashboardLayout from '@/components/Layout/Dashboard'
import { useAuthContext } from '@/contexts/AuthContext'
import { useRouter } from 'next/router'
import UserNotAllowed from '@/shared/UserNotAllowed'
import MainPicture from '@/components/dashboard/detail/MainPicture'
import Gallery from '@/components/dashboard/detail/Gallery'
import Identity from '@/components/dashboard/detail/Identity'
import Description from '@/components/dashboard/detail/Description'

const PropertyDetail = () => {
  const router = useRouter()
  const { pid } = router.query
  const { user } = useAuthContext()
  const { property, isLoading } = sdk.getPropertyById(pid as string)

  if (property && user._id !== property.userId._id) {
    return <UserNotAllowed />
  }

  if (!user) {
    return <h5 className="text-center">Redirecting...</h5>
  }

  return (
    <DashboardLayout>
      <Container className="my-3">
        {property && (
          <Link href="/dashboard" passHref>
            <Button variant="light" size="lg" className="mb-3" as="a">
              <IoMdArrowRoundBack /> Kembali
            </Button>
          </Link>
        )}
        {user && isLoading && <h5 className="text-center">Memuat...</h5>}
        {!isLoading && !property && <h5 className="text-center">Data tidak ditemukan. Silahkan kembali ke menu</h5>}

        {!isLoading && property && (
          <div className="pb-5">
            <MainPicture picture={property.mainPicture} />
            <Gallery gallery={property.gallery} />
            <Identity {...property} />
            <Description description={property.description} />
          </div>
        )}
      </Container>
    </DashboardLayout>
  )
}

export default PropertyDetail
