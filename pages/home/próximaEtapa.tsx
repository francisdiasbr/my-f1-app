import React from 'react'
import Head from 'next/head'

import MainContainer from 'components/MainContainer'
import Circuits from '../../components/Statistics/Circuits'

const NextEventPage = (props) => {
  return (
    <>
      <Head>
        <title>My F1 App - Próxima Etapa</title>
      </Head>
      <MainContainer>
        Próxima etapa
      </MainContainer>
    </>
  )
}

export default NextEventPage