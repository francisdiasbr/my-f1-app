import React from 'react'
import Head from 'next/head'

import Circuits from '../../components/Statistics/Circuits'
import Drivers from '../../components/Statistics/Drivers'
import Races from '../../components/Statistics/Races'
import Teams from '../../components/Statistics/Teams'


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