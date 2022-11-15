import Teams from '../components/Teams'
import React from 'react'
import Head from 'next/head'

const MainPage = (props) => {
  return (
    <>
      <Head>
        <title>My F1 App - Teams</title>
      </Head>
      <Teams />
    </>
  )
}

export default MainPage