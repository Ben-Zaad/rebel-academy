import React, { useState, useEffect } from 'react';
import './App.css';
import { PlanetPopulationGraph } from './planets/planets-population-graph';
import { Vehicles } from './vehicles/vehicles-data';
import { People } from './people/people-data';
import { getPilotsMaxHomePopulationSum } from './utils/utils';
import background from './images/bg.jpg';
import styled from 'styled-components';

function App() {
  const [planets, setPlanets] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [people, setPeople] = useState([]);
  const [populationArray, setPopulationArray] = useState([]);

  useEffect(() => {
    if (vehicles.length > 0 && planets.length > 0 && people.length > 0) {
      setPopulationArray(getPilotsMaxHomePopulationSum(vehicles, people ,planets))
      // setIsDone(true);
    }
  }, [vehicles, planets, people]);

  return (
    <AppRootDiv>
      <Title>Welcome Rebel!</Title>
      <SubTitle>Graph shows Selected Planet Poplations</SubTitle>
      <PlanetPopulationGraph callback={(data) => setPlanets(data)} />
      <Vehicles callback={(data) => setVehicles(data)} />
      <People callback={(data) => setPeople(data)} />
      <GraphSubTitle>Poplation Shown on a logarmitc (log2) scale</GraphSubTitle>
      {populationArray[0] ?
        <SubTitle>{populationArray[0].name} reaches population of up to {populationArray[1]} </SubTitle> :
        <SubTitle>LOADING VEHICLE DETAILS</SubTitle>
      }
    </AppRootDiv>
  );
}

const AppRootDiv = styled.div`
  width: 99vw;
  height: 100vh;
  background-image: url(${background});
`;

const Title = styled.h1`
  color: #ffe81f;
  text-align: center;
  padding-top: 8vh;
`;

const SubTitle = styled.h3`
  color: #ffe81f;
  text-align: center;
`;

const GraphSubTitle = styled.h4`
  color: #ffe81f;
  text-align: center;
  font-style: italic;
  margin-top: -2vh;
`;

export default App;
