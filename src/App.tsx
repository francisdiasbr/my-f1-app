import React from 'react'
import Circuits from './Races'
import Pilots from './Pilots'
import Positions from './Positions'
import Schedule from './Schedule'
import Teams from './Teams'
import Topbar from './Topbar'
import { Container } from './Container/styled'
import { Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
      <Topbar />
      <Container>
        <Route path='/circuitos' component={Circuits} />
        <Route path='/pilotos' component={Pilots} />
        <Schedule />
      </Container>
      <Container>
        <Route path='/equipes' component={Teams} /> 
        <Route path='/calculadora' component={Positions} />
      </Container>
    </>
  )
}

export default App
