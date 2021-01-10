import { useSignUp } from '@/sdk/auth'
import ButtonLoading from '@/shared/ButtonLoading'
import { ErrorMessage } from '@hookform/error-message'
import Link from 'next/link'
import { useState } from 'react'
import { Badge, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'

interface SignUpForm {
  email: string
  fullName: string
  password: string
  repeatPassword: string
}

const SignUpForm = () => {
  const [check, setCheck] = useState<boolean>(false)
  const { isLoading, mutateUserSignUp } = useSignUp()
  const { register, errors, handleSubmit, watch, setValue, trigger } = useForm<SignUpForm>()

  const onSubmit = async (data: SignUpForm) => {
    toast.dismiss()
    const res = await mutateUserSignUp({
      email: data.email,
      password: data.password,
      repeatPassword: data.repeatPassword,
      fullName: data.fullName
    })

    if (res!.success === true) {
      // SUKSES
      toast.success(res!.response.msg)
      setValue('email', '')
      setValue('fullName', '')
      setValue('password', '')
      setValue('repeatPassword', '')
      setCheck(false)
    } else {
      setValue('repeatPassword', '')
      toast.error(res.response.msg)
    }
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group>
        <Form.Label>Nama Lengkap / Nama Perusahaan</Form.Label>
        <Form.Control
          ref={register({
            required: 'Mohon sertakan Nama yang valid',
            maxLength: {
              value: 50,
              message: 'Panjang maksimal adalah 50 karakter'
            },
            minLength: {
              value: 3,
              message: 'Panjang minimal adalah 3 karakter'
            }
          })}
          onChange={() => trigger('fullName')}
          disabled={isLoading}
          name="fullName"
          type="text"
          placeholder="contoh: John Bejo"
        />
        <ErrorMessage
          name="fullName"
          errors={errors}
          render={({ message }) => <Badge variant="warning">{message}</Badge>}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Alamat Email</Form.Label>
        <Form.Control
          ref={register({
            required: 'Mohon sertakan Alamat Email yang valid',
            maxLength: {
              value: 30,
              message: 'Panjang maksimal adalah 30 karakter'
            },
            pattern: {
              // eslint-disable-next-line no-useless-escape
              value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
              message: 'Mohon sertakan format Alamat Email yang valid'
            }
          })}
          onChange={() => trigger('email')}
          disabled={isLoading}
          name="email"
          type="email"
          placeholder="contoh: example@do.it"
        />
        <ErrorMessage
          name="email"
          errors={errors}
          render={({ message }) => <Badge variant="warning">{message}</Badge>}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Kata Sandi</Form.Label>
        <Form.Control
          ref={register({
            required: 'Mohon sertakan Kata Sandi yang valid',
            maxLength: {
              value: 120,
              message: 'Panjang maksimal adalah 120 karakter'
            },
            minLength: {
              value: 8,
              message: 'Panjang minimal adalah 8 karakter'
            }
          })}
          onChange={() => trigger('password')}
          disabled={isLoading}
          name="password"
          type="password"
          placeholder="minimal 8 karakter"
        />
        <ErrorMessage
          name="password"
          errors={errors}
          render={({ message }) => <Badge variant="warning">{message}</Badge>}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Konfirmasi Kata Sandi</Form.Label>
        <Form.Control
          ref={register({
            validate: value => value == watch('password') || 'Konfirmasi Kata Sandi harus sama dengan Kata Sandi'
          })}
          onChange={() => trigger('repeatPassword')}
          disabled={isLoading}
          name="repeatPassword"
          type="password"
          placeholder="ulangi kata sandi anda"
        />
        <ErrorMessage
          name="repeatPassword"
          errors={errors}
          render={({ message }) => <Badge variant="warning">{message}</Badge>}
        />
      </Form.Group>

      <Form.Group>
        <Form.Check
          custom
          required
          onClick={() => setCheck(!check)}
          checked={check}
          id="checkbox"
          type="checkbox"
          label="Setuju dengan syarat dan ketentuan kami"
        />
      </Form.Group>

      <Form.Group className="m-0">
        <ButtonLoading loading={isLoading} block fill="Daftar" password={watch('repeatPassword')} type="submit" />
      </Form.Group>

      <div className="mt-4 text-center">
        sudah punya akun?{' '}
        <Link href="/login">
          <a>masuk</a>
        </Link>
      </div>
      <p className="text-center">
        kembali ke{' '}
        <Link href="/">
          <a>home</a>
        </Link>
      </p>
    </Form>
  )
}

export default SignUpForm
