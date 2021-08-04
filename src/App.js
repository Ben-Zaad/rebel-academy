import React, { useState, useEffect } from 'react';
import './App.css';
import { PlanetPopulationGraph } from './planets/planets-population-graph';
import { Vehicles } from './vehicles/vehicles-data';
import { People } from './people/people-data';
import { getHighestPopulationData, getNumString } from './utils/utils';
import background from './images/bg.jpg';
import styled from 'styled-components';

function App() {
  const [planets, setPlanets] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [people, setPeople] = useState([]);
  const [highestPopulationVehicle, setHighestPopulationVehicle] = useState({
    vehicle: null,
    largestPopulationSum: 0,
    relatedPlanets: [],
    relatedPilotNames: [],
  });

  useEffect(() => {
    if (vehicles.length > 0 && planets.length > 0 && people.length > 0) {
      setHighestPopulationVehicle(
        getHighestPopulationData(vehicles, people, planets)
      );
    }
  }, [vehicles, planets, people]);

  return (
    <AppRootDiv>
      <Title>Welcome Rebel!</Title>
      <SubTitle>Graph shows Selected Planet Populations</SubTitle>
      <PlanetPopulationGraph callback={(data) => setPlanets(data)} />
      <Vehicles callback={(data) => setVehicles(data)} />
      <People callback={(data) => setPeople(data)} />
      {highestPopulationVehicle.vehicle ? (
        <>
          <Table>
            <thead>
            <TableRow>
              <TableHeader>Largest Population Accessing Vehicle</TableHeader>
              <TableHeader>Related Pilots</TableHeader>
              <TableHeader>Related Home Planets</TableHeader>
            </TableRow>
            </thead>
            <tbody>
            <TableRow>
              <TableData>{highestPopulationVehicle.vehicle.name} Population reach: {getNumString(highestPopulationVehicle.largestPopulationSum)}!</TableData>
              <TableData>{highestPopulationVehicle.relatedPilotNames.map(pilotName=>{return `${pilotName} \n`})}</TableData>
              <TableData>{highestPopulationVehicle.relatedPlanets.map(planet=>{return `${planet.name} population: ${getNumString(planet.population)} \n`})}</TableData>
            </TableRow>
            </tbody>
          </Table>
        </>
      ) : (
        <SubTitle>Calculating Vehicles Populations Sums</SubTitle>
      )}
    </AppRootDiv>
  );
}

const AppRootDiv = styled.div`
  width: 99vw;
  height: 101vh;
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

const Table = styled.table`
  border: 1px solid #ffe81f;
`;

const TableHeader = styled.th`
  color: #ffe81f;
  width: 50vw;
`

const TableData = styled.td`
  color: white;
  align: center;
  width: 50vw;
  white-space: pre-wrap;
`

const TableRow = styled.tr`
  text-align: center;
  width: 50vw;
`

export default App;
