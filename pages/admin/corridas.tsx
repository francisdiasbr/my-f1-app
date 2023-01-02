import React from 'react'
import Head from 'next/head'

import AdminContainer from 'components/AdminContainer'
import Races from '../../components/Statistics/Races'

const RacesPage = (props) => {
  return (
    <>
      <Head>
        <title>My F1 App - Statistics</title>
      </Head>
      <AdminContainer>
        <Races />
      </AdminContainer>
    </>
  )
}

export default RacesPage