import { useState } from 'react'
import { Col, Container, Row, Spinner } from 'react-bootstrap'

import ModalShowProperty from '@/components/dashboard/ModalShowProperty'
import sdk from '@/sdk/property'
import { useAuthContext } from '@/contexts/AuthContext'
import StatusBar from '@/components/dashboard/StatusBar'
import useAuth from '@/utils/useAuth'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast'

const Dashboard = () => {
  const { user } = useAuthContext()
  const router = useRouter()
  const { userSignOut } = useAuth()
  const { properties, isLoading, updatedAt } = sdk.getPropertyByUserID(user?._id)
  const [showModal, setShowModal] = useState(false)

  const handleLogout = () => {
    userSignOut('/')
    toast.success('Berhasil keluar')
  }

  return (
    <>
      <Container className="my-3">
        <ModalShowProperty
          isLoading={isLoading}
          properties={properties}
          setShowModal={setShowModal}
          showModal={showModal}
        />

        <h2>
          <span className="logo-font">TuanTanah</span> dashboard
        </h2>

        <StatusBar onLogout={handleLogout} setShowModal={setShowModal} updatedAt={updatedAt} />
        {isLoading && (
          <span className="flex-inline">
            Memuat <Spinner variant="success" animation="grow" />
          </span>
        )}
      </Container>
      {/* {!isLoading && <Table property={data.property} />} */}
    </>
  )
}

export default Dashboard
