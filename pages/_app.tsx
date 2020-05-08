import { AppProps } from 'next/app'
import '../styles/index.css'

const MaximeSalomon = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default MaximeSalomon