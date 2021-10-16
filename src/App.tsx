import React from "react";
import Circuits from "./Circuits";
import Drivers from "./Drivers";
import Positions from "./Positioncalc";
import Races from "./Races";
import Teams from "./Teams";
import Topbar from "./Topbar";
import { Container } from "./Container/styled";
import { Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Topbar />
      <Container>
        <Route path="/circuitos" component={Circuits} />
        <Route path="/corridas" component={Races} />
        <Route path="/pilotos" component={Drivers} />
        <Route path="/equipes" component={Teams} />
        <Route path="/calculadora" component={Positions} />
      </Container>
    </>
  );
}

export default App;
