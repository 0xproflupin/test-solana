import '../styles/globals.css'
import { Wallet } from '../components/Wallet'

function MyApp({ Component, pageProps }) {
  return <Wallet>
    <Component {...pageProps} />
  </Wallet>
}

export default MyApp
