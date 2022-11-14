import Circuits from '../src/Circuits'
import React from 'react'
import Head from 'next/head'

const MainPage = (props) => {
  return (
    <>
      <Head>
        <title>My F1 App - Circuits</title>
      </Head>
      <Circuits />
    </>
  )
}

export default MainPage