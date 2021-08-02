import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { getMultiplePagesData } from '../api/get-multiple-pages-data-noreact';

import { GraphColumn } from './graph-column';

export function PlanetPopulationGraph({ callback }) {
  const [plantes, setPlanets] = useState([]);

  const saveData = (data) => {
    setPlanets(data);
    callback(data);
  }

  useEffect(
    ()=>getMultiplePagesData('https://swapi.dev/api/planets',saveData)
  ,[])

  return (
    <Div>
      <Graph>
        {/*CREATES A 1000 WARNINGS ON CONSOLE- CHECK BEFORE ALLOWING*/}    
        {/* {plantes.length > 0 &&
          plantes
            .filter(
              (planet) =>
                planet.name === 'Tatooine' ||
                planet.name === 'Alderaan' ||
                planet.name === 'Naboo' ||
                planet.name === 'Bespin' ||
                planet.name === 'Endor'
            )
            .map((item) => <GraphColumn key={item.name} item={item} />)} */}
      </Graph>
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Graph = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 50vh;
`;