import { fetcher } from './apiConfig'

export async function userLogin({
  email = '',
  password = ''
}): Promise<{ success: boolean; response: { msg: string }; token: string }> {
  try {
    return await fetcher({ route: '/d/signin', data: { email, password } })
  } catch (err) {
    throw new Error(err.toString())
  }
}

export async function userSignUp(data: {
  email: string
  password: string
  repeatPassword: string
  fullName: string
}): Promise<{ success: boolean; response: { msg: string }; token: string }> {
  try {
    return await fetcher({ route: '/d/signup', data: { ...data } })
  } catch (err) {
    throw new Error(err.toString())
  }
}
