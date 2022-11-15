import NewCircuits from '../components/NewCircuits'
import React from 'react'
import Head from 'next/head'

const MainPage = (props) => {
  return (
    <>
      <Head>
        <title>My F1 App - Circuits</title>
      </Head>
      <NewCircuits />
    </>
  )
}

export default MainPage