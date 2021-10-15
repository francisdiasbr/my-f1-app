import React from 'react'
import axios from 'axios'
import { get } from 'lodash'
import { Input } from '../Input'
import { Button } from '../Button'

const Teams = () => {
  // team states
  const [teamName, setTeamName] = React.useState('')
  const [teamFirstGp, setTeamFirstGp] = React.useState('')

  // team handles
  const handleTeamNameChange = (event: any) => {
    setTeamName(event.target.value)
  }
  const handleTeamFirstGpChange= (event: any) => {
    setTeamFirstGp(event.target.value)
  }
  // circuit submit
  const handleTeamSubmit = async () => {
    const teamBody = {
      name: teamName,
      firstgp: teamFirstGp
    }
    const response1 = await axios.post('http://localhost:3001/teams/', teamBody)
    const result1 = get(response1, 'data')
    console.log('result1', result1)

    const response2 = await axios.get('http://localhost:3001/teams/')
    const result2 = get(response2, 'data', 0)
    console.log('result2', result2)
  }

  // 
  return (
    <div>
      <h1>Equipes</h1>
      <label>Nome da equipe</label>
      <Input
        name="teamName"
        onChange={handleTeamNameChange}
        type="text">
      </Input>
      <label>Primeiro GP</label>
      <Input
        name="teamFirstGp"
        onChange={handleTeamFirstGpChange}
        type="text">
      </Input>
      <Button
        onClick={handleTeamSubmit}
        primary={true}
        type="button">
        Enviar
      </Button>
    </div>
  )
}

export default Teams