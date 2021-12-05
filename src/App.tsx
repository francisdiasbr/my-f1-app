import React from 'react'
import Circuits from './Circuits'
import Drivers from './Drivers'
import Positions from './Positioncalc'
import Races from './Races'
import Teams from './Teams'
import Topbar from './Topbar'
import { MarginContainer } from './Styleguide/styled'
import { Route } from 'react-router-dom'
import './App.css'

export const App = () => {
  return (
      <Topbar />
      <MarginContainer>
        <Route path='/circuitos' component={Circuits} />
        <Route path='/corridas' component={Races} />
        <Route path='/pilotos' component={Drivers} />
        <Route path='/equipes' component={Teams} />
        <Route path='/calculadora' component={Positions} />
      </MarginContainer>
  )
}
