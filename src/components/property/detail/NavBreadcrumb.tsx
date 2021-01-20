import Link from 'next/link'
import { Breadcrumb } from 'react-bootstrap'

const NavBreadcrumb = ({ title = '' }) => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item>
        <Link href="/">
          <a>Home</a>
        </Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <Link href="/property">
          <a>Property</a>
        </Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item active>{title}</Breadcrumb.Item>
    </Breadcrumb>
  )
}

export default NavBreadcrumb
