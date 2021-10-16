import React from "react";
import axios from "axios";
import { get } from "lodash";
import { Button } from "../Button";
import { Input } from "../Input";
import { Heading1, Heading2, InputWrap } from "../Styleguide/styled";

const Positions = () => {
  // position states
  const [points, setPoints] = React.useState("");
  const [position, setPosition] = React.useState("");
  // position handle
  const handlePositionChange = (event: any) => {
    setPosition(event.target.value);
  };
  // position submit
  const handlePositionSubmit = async () => {
    const response = await axios.get(
      `http://localhost:3001/standings/${position}`
    );
    const result = get(response, "data.points", 0);
    setPoints(result);
  };
  return (
    <InputWrap>
      <Heading1>Número de pontos na corrida</Heading1>
      <label>Posição</label>
      <Input name="posição" onChange={handlePositionChange} type="text"></Input>
      <br></br>
      <Button onClick={handlePositionSubmit} primary={true} type="button">
        Enviar
      </Button>
      <br></br>
      <Heading2>Resultado: {points}</Heading2>
    </InputWrap>
  );
};

export default Positions;
