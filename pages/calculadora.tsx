import Positions from '../components/Positioncalc'
import PositionsCalculator from '../components/PositionCalculator'
import React from 'react'
import Head from 'next/head'

const MainPage = (props) => {
  return (
    <>
      <Head>
        <title>My F1 App - Positions</title>
      </Head>
      {/* <Positions /> */}
      <PositionsCalculator />
    </>
  )
}

export default MainPage