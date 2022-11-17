import React from 'react'
import Head from 'next/head'

import NewCircuits from '../components/NewCircuits'
import NewDrivers from '../components/NewDrivers'
import NewRaces from '../components/NewRaces'
import NewTeams from '../components/NewTeams'


const MainPage = (props) => {
  return (
    <>
      <Head>
        <title>My F1 App - Statistics</title>
      </Head>
      <NewRaces />
      <NewCircuits />
      <NewTeams />
      <NewDrivers />
    </>
  )
}

export default MainPage