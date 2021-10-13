import React from 'react'
import axios from 'axios'
import { get } from 'lodash'
import { Input } from '../Input'
import { Button } from '../Button'


const Positions = () => {
	// position states
	const [points, setPoints] = React.useState('')
	const [position, setPosition] = React.useState('')
	// position handle
	const handlePositionChange = (event: any) => {
		setPosition(event.target.value)
	}
	// position submit
	const handlePositionSubmit = async () => {
		const response = await axios.get(`http://localhost:3001/standings/${position}`)
		const result = get(response, 'data.points', 0)
		setPoints(result)
	}
	return (
		<div>
			<h1>Número de pontos na corrida</h1>
			<label>Posição</label>
			<Input
				name="posição"
				onChange={handlePositionChange}
				type="text">
			</Input>
			<Button
				onClick={handlePositionSubmit}
				type="button">
				Enviar
			</Button>
			<h2>Resultado: {points}</h2>
		</div>
	)
}

export default Positions