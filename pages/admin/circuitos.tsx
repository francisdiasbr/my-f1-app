import React from 'react'
import Head from 'next/head'

import AdminContainer from 'components/AdminContainer'
import Circuits from '../../components/Statistics/Circuits'

const CircuitsPage = (props) => {
  return (
    <>
      <Head>
        <title>My F1 App - Statistics - Circuitos</title>
      </Head>
      <AdminContainer>
        <Circuits/>
      </AdminContainer>
    </>
  )
}

export default CircuitsPage