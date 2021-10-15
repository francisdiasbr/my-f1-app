import React from 'react'
import { Heading1, TopbarContainer } from '../Headings/styled'
import { Link } from 'react-router-dom'

const Topbar = () => {
  return (
    <TopbarContainer>
      <Link to='/'>
        <Heading1>F1 Stats 2021</Heading1>
      </Link>
      <Link to='/apostas'>
      <Heading1>APOSTAS</Heading1>
      </Link>
      <Link to='/circuitos'>
        <Heading1>CIRCUITOS</Heading1>
      </Link>
      <Link to='/corridas'>
        <Heading1>GRANDES PRÊMIOS</Heading1>
      </Link>
      <Link to='/pilotos'>
      <Heading1>PILOTOS</Heading1>
      </Link>
      <Link to='/equipes'>
      <Heading1>EQUIPES</Heading1>
      </Link>
      <Link to='/calculadora'>
      <Heading1>CALCULADORA</Heading1>
      </Link>
    </TopbarContainer>
  )
}

export default Topbar