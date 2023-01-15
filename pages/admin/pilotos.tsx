import React from 'react'
import Head from 'next/head'

import Drivers from '../../components/Statistics/Drivers'

const DriversPage = (props) => {
  return (
    <>
      <Head>
        <title>My F1 App - Statistics - Pilotos</title>
      </Head>
      <Drivers/>
    </>
  )
}

export default DriversPage