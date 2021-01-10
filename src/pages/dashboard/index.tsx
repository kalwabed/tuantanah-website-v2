import { useEffect, useState } from 'react'
import { Container, Spinner } from 'react-bootstrap'
import { useQuery } from 'react-query'

import ModalShowProperty from '@/components/dashboard/ModalShowProperty'
import { Property } from '@/shared/interface'
import { useAuthContext } from '@/contexts/AuthContext'
import StatusBar from '@/components/dashboard/StatusBar'

const Dashboard = (props: any) => {
  const { user } = useAuthContext()
  // const { data, isLoading, dataUpdatedAt } = useQuery<Property[], Promise<Property[]>>(
  //   ['userProperty', user._id],
  //   fetchPropertyByUserID,
  //   {
  //     onSettled: (): void => setUpdatedAt(new Date())
  //   }
  // )
  // const [updatedAt, setUpdatedAt] = useState(new Date(dataUpdatedAt))
  const [showModal, setShowModal] = useState(false)
  // const onLogout = () => {
  //   setToken(null, false)
  //   setIsAuthenticated(false)
  //   props.history.push('/')
  // }

  return (
    <>
      <Container className="my-3">
        {/* <ModalShowProperty isLoading={isLoading} properties={data} setShowModal={setShowModal} showModal={showModal} /> */}
        <h1>Dashboard</h1>
        {/* <StatusBar onLogout={onLogout} setShowModal={setShowModal} updatedAt={updatedAt} /> */}

        {/* {isLoading && (
          <span className="flex-inline">
            Memuat <Spinner variant="success" animation="grow" />
          </span>
        )} */}
      </Container>
      {/* {!isLoading && <Table property={data.property} />} */}
    </>
  )
}

export default Dashboard
