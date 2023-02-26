import React from 'react'
import Head from 'next/head'

import AdminContainer from 'components/AdminContainer'
import Article from '../../components/Statistics/Article'

const MateriaPage = (props) => {
  return (
    <>
      <Head>
        <title>My F1 App - Statistics - Matérias</title>
      </Head>
      <AdminContainer>
        <Article/>
      </AdminContainer>
    </>
  )
}

export default MateriaPage