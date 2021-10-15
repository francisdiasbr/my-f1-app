import React from 'react'
import Circuits from './Circuits'
import Pilots from './Pilots'
import Positions from './Positions'
import Races from './Races'
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
        <Route path='/corridas'component={Races} />
        <Route path='/pilotos' component={Pilots} />
        <Route path='/equipes' component={Teams} /> 
        <Route path='/calculadora' component={Positions} />
      </Container>
    </>
  )
}

export default App
