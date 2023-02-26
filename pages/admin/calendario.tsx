import React from 'react'
import Head from 'next/head'

import AdminContainer from 'components/AdminContainer'
import Calendar from '../../components/Statistics/Calendar'

const CalendarPage = (props) => {
  return (
    <>
      <Head>
        <title>My F1 App - Statistics - Circuitos</title>
      </Head>
      <AdminContainer>
        <Calendar/>
      </AdminContainer>
    </>
  )
}

export default CalendarPage