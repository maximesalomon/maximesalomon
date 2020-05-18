import { AppProps } from 'next/app'
import '../css/index.css'

// MAXIME SALOMON APP
const MaximeSalomon = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default MaximeSalomon