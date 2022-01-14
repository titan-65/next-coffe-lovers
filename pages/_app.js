import '../styles/globals.css'
import NavHeader from '../components/NavHeader'


function MyApp({ Component, pageProps }) {
  return (
    <div>
      <NavHeader/>
      <Component {...pageProps} />
    </div>
    
  )
}

export default MyApp
