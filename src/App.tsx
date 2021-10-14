import React from 'react'
import Circuits from './Races'
import Pilots from './Pilots'
import Positions from './Positions'
import Schedule from './Schedule'
import Topbar from './Topbar'
import { Container } from './Container/styled'
import './App.css'

function App() {
  return (
    <>
      <Topbar />
      <Container>
        <p>teste</p>
        <Circuits />
        <Pilots />
        <Schedule />
      </Container>
      <Container>
        <Positions />
      </Container>
    </>
  )
}

export default App
