async function fetcher({ route = '', method = 'post', data }) {
  return await (
    await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}${route}`, {
      method,
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ ...data })
    })
  ).json()
}

export async function userLogin({
  email = '',
  password = ''
}): Promise<{ success: boolean; response: { msg: string }; token: string }> {
  try {
    return await fetcher({ route: '/d/signin', data: { email, password } })
  } catch (err) {
    console.error(err)
  }
}
