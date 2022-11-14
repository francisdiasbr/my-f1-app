import Drivers from '../src/Drivers'
import React from 'react'
import Head from 'next/head'

const MainPage = (props) => {
  return (
    <>
      <Head>
        <title>My F1 App - Drivers</title>
      </Head>
      <Drivers />
    </>
  )
}

export default MainPage