import { Button, Spinner } from 'react-bootstrap'

interface BtnLoading {
  type: string
  block: boolean
  fill: string
  password: string
  loading: boolean
}

const ButtonLoading = (props: BtnLoading) => {
  const { loading = false, fill = '', password = '', type = 'submit', block = true }: BtnLoading = props
  return (
    <Button
      block={block}
      type={type}
      variant={password.length < 5 || loading ? 'secondary' : 'success'}
      disabled={password.length < 5 || loading}
    >
      {loading && 'Memproses  '}
      {loading && <Spinner as="span" animation="border" size="sm" />}
      {!loading && fill}
    </Button>
  )
}

export default ButtonLoading
