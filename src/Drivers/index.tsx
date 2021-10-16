import axios from "axios";
import React from "react";
import { get } from "lodash";
import { map } from "lodash";
import DriverItem, { DriverItemProps } from "./item";
import { Button } from "../Button";
import { Input } from "../Input";
import {
  Container,
  ContentWrap,
  HeaderTable,
  Heading1,
  InputWrap,
  MyTable,
  Text1,
} from "../Styleguide/styled";

const Drivers = () => {
  // list driver state
  const [driverList, setDriverList] = React.useState([]);
  // pilot states
  const [driverBirth, setDriverBirth] = React.useState("");
  const [driverCountry, setDriverCountry] = React.useState("");
  const [driverLastWin, setDriverLastWin] = React.useState("");
  const [driverName, setDriverName] = React.useState("");
  const [driverNickname, setDriverNickname] = React.useState("");
  const [driverTeam, setDriverTeam] = React.useState("");

  // função que carrega os pilotos da API
  const loadDriverFromApi = async () => {
    // carrega os pilotos da api
    const requestDriver = await axios.get("http://localhost:3001/drivers/");
    // prepara o dado dos pilotos (data)
    const resultDriver = get(requestDriver, "data", []);
    // salva os pilotos no driverList
    setDriverList(resultDriver);
  };

  // driver handles
  const handleDriverBirthChange = (event: any) => {
    setDriverBirth(event.target.value);
  };
  const handleDriverCountryChange = (event: any) => {
    setDriverCountry(event.target.value);
  };
  const handleDriverLastWinChange = (event: any) => {
    setDriverLastWin(event.target.value);
  };
  const handleDriverNameChange = (event: any) => {
    setDriverName(event.target.value);
  };
  const handleDriverNicknameChange = (event: any) => {
    setDriverNickname(event.target.value);
  };
  const handleDriverTeamChange = (event: any) => {
    setDriverTeam(event.target.value);
  };
  // driver button submit
  const handleDriverSubmit = async () => {
    // define o modelo de dados a ser salvo
    const driverBody = {
      name: driverName,
      nickname: driverNickname,
      birth: driverBirth,
      country: driverCountry,
      team: driverTeam,
      lastwin: driverLastWin,
    };
    // salva o novo piloto
    await axios.post("http://localhost:3001/drivers/", driverBody);
    // função de carregar os pilotos para atualizar a tabela
    loadDriverFromApi();
  };
  // toda a vez que a página carregar
  React.useEffect(() => {
    // chama a função de carregar os pilotos
    loadDriverFromApi();
  }, []);
  return (
    <Container>
      <Heading1>Pilotos</Heading1>
      <ContentWrap>
        <InputWrap>
          <label>Nome</label>
          <Input
            name="driverName"
            onChange={handleDriverNameChange}
            type="text"
          ></Input>
          <br></br>
          <label>Apelido</label>
          <Input
            name="driverNickname"
            onChange={handleDriverNicknameChange}
            type="text"
          ></Input>
          <br></br>
          <label>Data de Nascimento</label>
          <Input
            name="driverBirth"
            onChange={handleDriverBirthChange}
            type="text"
          ></Input>
          <br></br>
          <label>País</label>
          <Input
            name="driverCountry"
            onChange={handleDriverCountryChange}
            type="text"
          ></Input>
          <br></br>
          <label>Equipe</label>
          <Input
            name="driverTeam"
            onChange={handleDriverTeamChange}
            type="text"
          ></Input>
          <br></br>
          <label>Última Vitória</label>
          <Input
            name="driverLastWin"
            onChange={handleDriverLastWinChange}
            type="text"
          ></Input>
          <br></br>
          <Button onClick={handleDriverSubmit} primary={true} type="button">
            Enviar
          </Button>
        </InputWrap>
      </ContentWrap>
      <Text1>Pilotos</Text1>
      <MyTable>
        <tr>
          <HeaderTable>Nome</HeaderTable>
          <HeaderTable>Apelido</HeaderTable>
          <HeaderTable>Data de Nascimento</HeaderTable>
          <HeaderTable>País</HeaderTable>
          <HeaderTable>Equipe</HeaderTable>
          <HeaderTable>Última Vitória</HeaderTable>
        </tr>
        <tbody>
          {map(driverList, (item: DriverItemProps, key) => {
            return (
              <DriverItem
                name={item?.name}
                nickname={item?.nickname}
                birth={item?.birth}
                country={item?.country}
                team={item?.team}
                lastwin={item?.lastwin}
              />
            );
          })}
        </tbody>
      </MyTable>
    </Container>
  );
};

export default Drivers;
