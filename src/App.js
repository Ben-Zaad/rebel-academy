import React, { useState, useEffect } from 'react';
import './App.css';
import { PlanetPopulationGraph } from './planets/planets-population-graph';
import { Vehicles } from './vehicles/vehicles-data';
import background from './images/bg.jpg';
import styled from 'styled-components';

function App() {
  // const [error, setError] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);
  const [planets, setPlanets] = useState([]);
  // const [vehicles, setVehicles] = useState([]);
  const callback = (data) => {
    setPlanets(data);
  }
  return (
    <AppRootDiv>
      <Title>Welcome Rebel!</Title>
      <SubTitle>Graph shows Selected Planet Poplations</SubTitle>
      <PlanetPopulationGraph callback={callback} />
      <Vehicles />
      <GraphSubTitle>Poplation Shown on a logarmitc (log2) scale</GraphSubTitle>
    </AppRootDiv>
  )
}

const AppRootDiv = styled.div`
  width: 99vw;
  height: 100vh;
  background-image: url(${background});
`;

const Title = styled.h1`
  color: #FFE81F;
  text-align: center;
  padding-top: 8vh;
`;

const SubTitle = styled.h3`
color: #FFE81F;
text-align: center;
`;

const GraphSubTitle = styled.h4`
  color: #FFE81F;
  text-align: center;
  font-style: italic;
  margin-top: -2vh;
`;

export default App;
