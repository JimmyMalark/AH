import { useState } from 'react';
import Head from 'next/head';
import '../styles/globals.scss';
import Layout from '../components/layout/Layout';

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState(false);
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.svg" />
        <title>Amir Hosein</title>
      </Head>
      <Layout theme={theme} setTheme={setTheme}>
        <Component {...pageProps} theme={theme} />
      </Layout>
    </>
  )
}

export default MyApp
