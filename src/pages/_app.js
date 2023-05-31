import '@/styles/globals.css'
import Navbar from '@/components/navbar'

import { appWithTranslation} from 'next-i18next'
import Footer from '@/components/footer'

 function App({ Component, pageProps }) {
  return  <>
  <Navbar/>

  <Component {...pageProps} />

  <Footer/>

  </>

}

export default appWithTranslation(App)