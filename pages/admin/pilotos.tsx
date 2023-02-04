import React from 'react'
import Head from 'next/head'

import AdminContainer from 'components/AdminContainer'
import Drivers from '../../components/Statistics/Drivers'

const DriversPage = (props) => {
  return (
    <>
      <Head>
        <title>My F1 App - Statistics - Pilotos</title>
      </Head>
      <AdminContainer>
        <Drivers />
      </AdminContainer>
    </>
  )
}

export default DriversPage