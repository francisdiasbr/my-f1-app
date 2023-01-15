import React from 'react'
import Head from 'next/head'

import AdminContainer from 'components/AdminContainer'
import Teams from '../../components/Statistics/Teams'

const TeamsPage = (props) => {
  return (
    <>
      <Head>
        <title>My F1 App - Statistics</title>
      </Head>
      <AdminContainer>
        <Teams/>
      </AdminContainer>
    </>
  )
}

export default TeamsPage