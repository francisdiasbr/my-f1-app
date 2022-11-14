import Positions from '../src/Positioncalc'
import React from 'react'
import Head from 'next/head'

const MainPage = (props) => {
  return (
    <>
      <Head>
        <title>My F1 App - Positions</title>
      </Head>
      <Positions />
    </>
  )
}

export default MainPage