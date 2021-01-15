import 'bootstrap/dist/css/bootstrap.min.css'
import 'gridjs/dist/theme/mermaid.css'
import 'pell/dist/pell.min.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ReactQueryDevtools } from 'react-query/devtools'
import { QueryCache, QueryClient, QueryClientProvider } from 'react-query'
import { Toaster } from 'react-hot-toast'
import AuthContext from '@/contexts/AuthContext'

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
          <Component {...pageProps} />
        </AuthContext.Provider>
        <Toaster toastOptions={{ duration: 5000 }} />
        <ReactQueryDevtools />
      </QueryClientProvider>
      <style jsx global>{`
        body {
          margin: 0;
          font-family: 'Montserrat', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .nav-font {
          font-family: 'PT Mono', monospace;
        }

        .section {
          position: relative;
        }

        .section-lg {
          padding-top: 8rem;
          padding-bottom: 8rem;
        }

        .font-card {
          font-size: 0.875rem;
        }

        .sold {
          filter: grayscale();
        }

        .section-sm {
          padding-top: 3rem;
          padding-bottom: 3rem;
        }

        .logo-font {
          font-family: 'Righteous', cursive;
        }

        .footer {
          padding-top: 8rem;
          padding-bottom: 5rem;
        }

        .link-footer {
          list-style: none;
        }

        .font-small {
          font-size: 0.825rem;
        }

        .newlink {
          /* teknik sebelumnya */
          /* box-shadow: inset 0 -.12em 0 #28a745; */
          /* transition: box-shadow .2s ease-in-out, color .2s ease-in-out; */

          /*  teknik baru */
          padding: 2px 0 1px;
          text-decoration: inherit;
          color: inherit;
          transition: all 120ms ease-in-out 0s;
          background-size: 100% 200%;
          background-position: 0px 0px;
          background-image: linear-gradient(
            transparent 0%,
            transparent calc(50% - 9px),
            #28a745 calc(50% - 9px),
            #28a745 100%
          );
          word-break: break-word;
        }

        .newlink:hover {
          /* teknik lama */
          /* box-shadow: inset 0 -1.5em 0 #28a745; */

          /* teknik baru */
          text-decoration: inherit;
          background-image: linear-gradient(
            transparent 0%,
            transparent calc(50% - 9px),
            #41fa6c calc(50% - 9px),
            #41fa6c 100%
          );
          color: #212529;
          background-position: 0px 100%;
        }

        .img-gallery:hover {
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
          transition: 0.3s;
          opacity: 0.9;
          cursor: pointer;
        }

        .hover-shadow:hover {
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
          transition: all 120ms ease-in-out 0s;
        }

        .divider {
          width: 150px;
          margin-bottom: 0.3rem;
          height: 5px;
          display: inline-flex;
          background: linear-gradient(90deg, #212529, #f8f9fa);
        }

        hr {
          border: 0;
        }
      `}</style>
    </>
  )
}

export default MyApp
