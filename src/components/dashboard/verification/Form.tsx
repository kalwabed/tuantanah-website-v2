import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Badge, Button, Col, Form, Row, Spinner } from 'react-bootstrap'
import { ErrorMessage } from '@hookform/error-message'
import { toast } from 'react-hot-toast'

import type { Property } from '@/shared/interface'
import sdk from '@/sdk/property'
import Link from 'next/link'
import { Fade } from 'react-awesome-reveal'
import CardInformation from './CardInformation'

interface Inputs {
  propertyId: string
  certificate: FileList
}

interface Props {
  properties: Property[]
}

const VerificationForm = ({ properties }: Props) => {
  if (!properties) return null
  const { register, handleSubmit, setValue, errors } = useForm<Inputs>()
  const [labelCert, setLabelCert] = useState('Sertakan foto sertifikat')
  const [imgPreview, setImgPreview] = useState<string[]>([])
  const { mutateAsync, isLoading } = sdk.createCertificate()

  const filteredProperties = properties.filter(prop => !prop.status.soldOut)

  const submit = async (data: Inputs) => {
    const formData = new FormData()
    formData.append('propertyId', data.propertyId)

    for (let i = 0; i < data.certificate.length; i++) {
      formData.append('certificate', data.certificate[i])
    }

    //? for development purpose!
    // formData.forEach((val, key) => {
    //   console.log(`${key}, ${val}`)
    // })
    //? ----------------------

    try {
      const result = await mutateAsync(formData)
      if (!result.success) {
        toast.error(result.msg)
        return
      }
      setLabelCert('Sertakan foto sertifikat')
      setValue('certificate', undefined)
      setImgPreview([])
      toast.success(result.msg)
    } catch (err) {
      console.error(err)
    }
  }

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLabelCert(`${e.target.files?.length} gambar dipilih`)

    //? preview multiple images
    const imgObj = []
    const imgArr = []
    imgObj.push(e.target.files!)
    for (let i = 0; i < imgObj[0].length; i++) {
      imgArr.push(URL.createObjectURL(imgObj[0][i]))
    }
    setImgPreview(imgArr)
  }

  return (
    <>
      <Form onSubmit={handleSubmit(submit)}>
        <Row className="mt-3 px-5">
          <Col>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Properti</Form.Label>
                <Form.Control
                  ref={register({ required: 'Mohon sertakan properti' })}
                  name="propertyId"
                  as="select"
                  custom
                  disabled={isLoading || filteredProperties.length === 0}
                >
                  {filteredProperties.length !== 0 ? (
                    filteredProperties.map(({ title, _id, status: { shm } }) =>
                      shm === 0 ? (
                        <option value={_id} key={_id}>
                          {title}
                        </option>
                      ) : (
                        <option value="" disabled>
                          {title} ({shm === 1 ? 'proses verifikasi' : 'sudah terverifikasi'})
                        </option>
                      )
                    )
                  ) : (
                    <option defaultValue="">Tidak ada properti yang harus diverifikasi</option>
                  )}
                </Form.Control>
                <Form.Text>Pilih properti</Form.Text>
                <ErrorMessage
                  name="propertyId"
                  errors={errors}
                  render={({ message }) => <Badge variant="warning">{message}</Badge>}
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Sertifikat</Form.Label>
                <Form.File
                  ref={register({ required: 'Mohon sertakan foto dari sertifikat' })}
                  multiple
                  custom
                  id="certificate"
                  name="certificate"
                  accept="image/*"
                  disabled={isLoading || filteredProperties.length === 0}
                  label={labelCert}
                  onChange={handleImage}
                />
                <ErrorMessage
                  name="certificate"
                  errors={errors}
                  render={({ message }) => <Badge variant="warning">{message}</Badge>}
                />
              </Form.Group>
            </Form.Row>
          </Col>
        </Row>
        <Row className="mt-3 px-5">
          <Col>
            <h3>Pratinjau dokumen</h3>
            <Row>
              {imgPreview.length !== 0 && (
                <Fade className="col" triggerOnce cascade>
                  {imgPreview.map(source => (
                    <img src={source} key={source} alt="certificate" width="100%" className="card-img" />
                  ))}
                </Fade>
              )}
              {imgPreview.length === 0 && <Col className="text-center border mx-3">Tidak ada</Col>}
            </Row>
          </Col>
        </Row>
        <Row className="mt-3 px-5">
          <Col>
            <CardInformation />
          </Col>
        </Row>
        <Row className="mt-3 px-5">
          <Col>
            <FormButton isLoading={isLoading} />
          </Col>
        </Row>
      </Form>
    </>
  )
}

const FormButton = ({ isLoading = false }) => (
  <>
    <Link href="/dashboard" passHref replace>
      <Button disabled={isLoading} variant="secondary" className="mr-2" as="a">
        Kembali
      </Button>
    </Link>
    <Button type="submit" disabled={isLoading} variant={isLoading ? 'secondary' : 'success'}>
      {!isLoading && 'Kirim'}
      {isLoading && <Spinner as="span" animation="border" variant="light" size="sm" />}
    </Button>
  </>
)
export default VerificationForm
