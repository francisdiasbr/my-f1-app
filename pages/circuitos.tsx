import Circuits from '../components/Circuits'
import NewCircuits from '../components/NewCircuits'
import React from 'react'
import Head from 'next/head'

const MainPage = (props) => {
  return (
    <>
      <Head>
        <title>My F1 App - Circuits</title>
      </Head>
      {/* <Circuits /> */}
      <NewCircuits />
    </>
  )
}

export default MainPage