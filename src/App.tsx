import React from 'react'
import Circuits from './Circuits'
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
        <Schedule />
      </Container>
      <Container>
        <Positions />
      </Container>
    </>
  )
}

export default App
