import Link from 'next/link'
import { IoPersonCircleOutline } from 'react-icons/io5'

const DealerProfile = ({ fullName = '', _id = '' }) => {
  return (
    <div className="pt-4">
      <div>
        <IoPersonCircleOutline size="2em" />
        <Link href={`/u/${_id}`}>
          <a className="ml-1">{fullName}</a>
        </Link>
      </div>
    </div>
  )
}

export default DealerProfile
