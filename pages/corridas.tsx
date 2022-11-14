import Races from '../src/Races'
import React from 'react'
import Head from 'next/head'

const MainPage = (props) => {
  return (
    <>
      <Head>
        <title>My F1 App - Races</title>
      </Head>
      <Races />
    </>
  )
}

export default MainPage