import StatusPropertyCheck from '@/helpers/StatusPropertyCheck'
import id from 'date-fns/locale/id'
import format from 'date-fns/format'

interface Props {
  title: string
  location: string
  size: string
  price: number
  status: any
  updatedAt: Date
}

const PropertySummary = (props: Props) => {
  const { location, price, size, status, title, updatedAt } = props

  const PropertyUpdatedAt = ({ updatedAt }: { updatedAt: Date }) => {
    console.log(updatedAt)
    return <>{format(updatedAt, 'd MMMM yyy | HH:mm', { locale: id })} WIB</>
  }

  return (
    <>
      <div className="border-bottom">
        <h5 className="h4">{title}</h5>
        <p className="text-muted">{location}</p>
      </div>
      <h2>
        <span className="font-weight-light">{size}</span>
      </h2>
      <h2>
        <span className="font-weight-light">Rp. </span>
        {price} Juta
      </h2>
      <p>
        <StatusPropertyCheck {...status} />
      </p>

      <small className="text-muted">
        Terakhir diperbarui: <PropertyUpdatedAt updatedAt={updatedAt} />
      </small>
    </>
  )
}

export default PropertySummary
