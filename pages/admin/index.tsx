import React from 'react'
import Head from 'next/head'

import AdminContainer from 'components/AdminContainer'

const AdminHomePage = (props) => {
  return (
    <>
      <Head>
        <title>My F1 App - Admin Home Page</title>
      </Head>
      <AdminContainer>
        <h1>Admin Home Page</h1>
      </AdminContainer>
    </>
  )
}

export default AdminHomePage