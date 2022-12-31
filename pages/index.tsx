import React from 'react'
import Head from 'next/head'

import Home from '../components/Home'

const MainPage = (props) => {
  return (
    <>
      <Head>
        <title>My F1 App - New Page</title>
      </Head>
        <Home />
    </>
  )
}

export default MainPage