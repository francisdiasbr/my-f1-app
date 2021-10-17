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
import { ThemeProvider, buildTheme } from '@naturacosmeticos/natds-react'
import '@naturacosmeticos/natds-icons/dist/natds-icons.css'

const theme = buildTheme('theBodyShop', 'dark')

export const App = () => {
  return (
    <ThemeProvider theme={theme} cssPrefix='francss'>
      <Topbar />
      <MarginContainer>
        <Route path='/circuitos' component={Circuits} />
        <Route path='/corridas' component={Races} />
        <Route path='/pilotos' component={Drivers} />
        <Route path='/equipes' component={Teams} />
        <Route path='/calculadora' component={Positions} />
      </MarginContainer>
    </ThemeProvider>
  )
}
