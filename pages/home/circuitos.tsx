import React from 'react'
import Head from 'next/head'

import MainContainer from 'components/MainContainer'
import Circuits from '../../components/Statistics/Circuits'

const NewPage = (props) => {
  return (
    <>
      <Head>
        <title>My F1 App - Statistics - Circuitos</title>
      </Head>
      <MainContainer>
        New Section!
      </MainContainer>
    </>
  )
}

export default NewPage