import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AppWrapper } from '../context/AppContext'
import Layout from '../components/Layout'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppWrapper>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppWrapper>
  )
}
export default MyApp
