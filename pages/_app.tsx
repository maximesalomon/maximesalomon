import { AppProps } from 'next/app'
import '../css/index.css'

// APP
const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default App