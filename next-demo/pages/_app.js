import Head from 'next/head'
import Link from 'next/link'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Provider } from 'react-redux'
import configureStore from '@/redux/index';

const MyApp = ({ Component, pageProps }) => {
  const store = configureStore();
  return (
    <div>
      <Provider store={store} >
        <Head>
          <title>Pokemon demo app</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Component {...pageProps} />
      </Provider>


    </div>
  )
}

export default MyApp
