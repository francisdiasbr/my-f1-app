import React from 'react'
import {
  FormTitle,
  TopbarContainer,
  TopbarLogo,
  TopbarMenu,
} from '../Styleguide/styled'
import { Link } from 'react-router-dom'
import { Button } from '@naturacosmeticos/natds-react'

const Topbar = () => {
  return (
    <TopbarContainer>
      <Button
        iconPosition='left'
        iconName='outlined-product-vegan'
        showIcon={true}
        onClick={() => console.log('newtopbar')}
      >
        TOPBAR
      </Button>
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
