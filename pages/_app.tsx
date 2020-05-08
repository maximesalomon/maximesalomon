import { AppProps } from 'next/app'
import '../css/index.css'

const MaximeSalomon = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default MaximeSalomon