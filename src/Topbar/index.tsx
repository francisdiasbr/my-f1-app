import React from 'react'
import {
  FormTitle,
  TopbarContainer,
  TopbarLogo,
  TopbarMenu,
} from '../Styleguide/styled'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import PageTitle from '../PageTitle'

const MyCustomImage = styled.img`
  width: 50%;
`

const Topbar = () => {
  return (
    <TopbarContainer>
      <TopbarLogo>
        <PageTitle />
        <MyCustomImage alt='Logo' src='/f1car.jpeg' />
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
