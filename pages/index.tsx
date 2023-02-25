import React from 'react'
import Head from 'next/head'

import MainContainer from '../components/MainContainer'
import Home from '../components/Home'

const MainPage = (props) => {
  return (
    <>
      <Head>
        <title>My F1 App - New Page</title>
      </Head>
      <MainContainer>
        <Home />
        </MainContainer>
    </>
  )
}

export default MainPage