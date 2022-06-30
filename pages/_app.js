import 'styles/globals.css'
import Layout from './Product/Layout'
import 'styles/mycss.css'
import  Head  from 'next/head'
// import 'boostrap/dist/css/css.min'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import mysrore from 'REDUX STORE/mysrore'
import NavBar from './Product/NavBar'
import Footer from './Product/Footer'
import  { AppProps } from 'next/app'

import { SessionProvider } from "next-auth/react"
import { SWRConfig } from 'swr'
import axios from 'axios'

const storedetails=createStore(mysrore)

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  
  if (Component.getLayout) {
    return Component.getLayout(
    
      <SessionProvider session={session} refetchInterval={5 * 60}>
      <Component {...pageProps} />
      </SessionProvider> 
      )
    
  }

  const fetcher=url=>axios.get(url).then(response=>response.data)

    return (
      <SessionProvider session={session} refetchInterval={5 * 60}>
      <Provider store={storedetails}>
     
     <NavBar />
     
     <SWRConfig value={
       {
         fetcher:fetcher
       }
     }>
     
     <Component {...pageProps} />
     </SWRConfig>
     <Footer />
      </Provider>
      </SessionProvider>
    );
  



}

export default MyApp
