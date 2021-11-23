import React from 'react'
import {
  FormTitle,
  TopbarContainer,
  TopbarLogo,
  TopbarMenu,
} from '../Styleguide/styled'
import { Link } from 'react-router-dom'

const Topbar = () => {
  return (
    <TopbarContainer>
      <TopbarLogo>
        <Link to='/'>
          <FormTitle>F1 Stats 2021</FormTitle>
        </Link>
      </TopbarLogo>
      <TopbarMenu>
        <Link to='/apostas'>
          <FormTitle>PALPITES</FormTitle>
        </Link>
        <Link to='/circuitos'>
          <FormTitle>CIRCUITOS</FormTitle>
        </Link>
        <Link to='/corridas'>
          <FormTitle>CORRIDAS</FormTitle>
        </Link>
        <Link to='/pilotos'>
          <FormTitle>PILOTOS</FormTitle>
        </Link>
        <Link to='/equipes'>
          <FormTitle>EQUIPES</FormTitle>
        </Link>
        <Link to='/calculadora'>
          <FormTitle>CALCULADORA</FormTitle>
        </Link>
      </TopbarMenu>
    </TopbarContainer>
  )
}

export default Topbar
