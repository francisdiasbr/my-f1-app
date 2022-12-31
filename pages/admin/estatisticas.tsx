import React from 'react'
import Head from 'next/head'

import Circuits from '../../components/Circuits'
import Drivers from '../../components/Drivers'
import Races from '../../components/Races'
import Teams from '../../components/Teams'


const StatisticsPage = (props) => {
  return (
    <>
      <Head>
        <title>My F1 App - Statistics</title>
      </Head>
      <Races />
      <Circuits />
      <Teams />
      <Drivers />
    </>
  )
}

export default StatisticsPage