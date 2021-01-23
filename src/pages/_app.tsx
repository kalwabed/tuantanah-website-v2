import 'bootstrap/dist/css/bootstrap.min.css'
import 'gridjs/dist/theme/mermaid.css'
import 'pell/dist/pell.min.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ReactQueryDevtools } from 'react-query/devtools'
import { QueryCache, QueryClient, QueryClientProvider } from 'react-query'
import { Toaster } from 'react-hot-toast'
import AuthContext from '@/contexts/AuthContext'
import GlobalStyle, { NProgressStyle } from '@/components/GlobalStyle'
import NProgress from 'nprogress'
import { DefaultSeo } from 'next-seo'
import Router from 'next/router'
import seo from 'next-seo.config'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }: AppProps) {
  const queryCache = new QueryCache()
  const queryClient = new QueryClient({ queryCache: queryCache })

  return (
    <>
      <Head>
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
        <link rel="icon" type="image/png" sizes="32x32" href="icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="icons/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="icons/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Platform Pemasaran Properti di Indonesia" />
        <title>TuanTanah</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <AuthContext.Provider>
          <DefaultSeo {...seo} />
          <GlobalStyle />
          <NProgressStyle />
          <Component {...pageProps} />
        </AuthContext.Provider>
        <Toaster toastOptions={{ duration: 5000 }} />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  )
}

export default MyApp
