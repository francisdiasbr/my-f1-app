import React from 'react'
import Head from 'next/head'

import PositionsCalculator from '../components/PositionCalculator'

const MainPage = (props) => {
  return (
    <>
      <Head>
        <title>My F1 App - Positions</title>
      </Head>
      <PositionsCalculator />
    </>
  )
}

export default MainPage