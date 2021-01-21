import { IoPersonCircleOutline } from 'react-icons/io5'

const DealerProfile = ({ fullName = '' }) => {
  return (
    <div className="pt-4">
      <div>
        <IoPersonCircleOutline size="2em" />
        <span className="ml-1">{fullName}</span>
      </div>
    </div>
  )
}

export default DealerProfile
