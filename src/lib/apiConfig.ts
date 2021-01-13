interface FetcherProps {
  route?: string
  method?: 'post' | 'get' | 'put' | 'delete'
  data?: any
}

export async function fetcher(props: FetcherProps) {
  const { method = 'post', data, route = '' } = props
  if (method === 'post') {
    return await (
      await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}${route}`, {
        method,
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({ ...data })
      })
    ).json()
  } else {
    return await (
      await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}${route}`, {
        method,
        headers: {
          'content-type': 'application/json'
        }
      })
    ).json()
  }
}
