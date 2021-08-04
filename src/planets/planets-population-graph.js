import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ClipLoader from "react-spinners/ClipLoader";

import { getMultiplePagesData } from '../api/get-multiple-pages-data-noreact';

import { GraphColumn } from './graph-column';

export function PlanetPopulationGraph({ callback }) {
  const [plantes, setPlanets] = useState([]);

  const saveData = (data) => {
    setPlanets(data);
    callback(data);
  };

  useEffect(
    () => getMultiplePagesData('https://swapi.dev/api/planets', saveData),
    []
  );

  return (
    <Div>
      <Graph>
        {plantes.length > 0 ? (
          plantes
            .filter(
              (planet) =>
                planet.name === 'Tatooine' ||
                planet.name === 'Alderaan' ||
                planet.name === 'Naboo' ||
                planet.name === 'Bespin' ||
                planet.name === 'Endor'
            )
            .map((item) => <GraphColumn key={item.name} item={item} />)
        ) : (
          <Container>
            <LoaderDiv>
              <ClipLoader color={'White'} loading={true} size={50} />
              <Loading>Loading Planets Data...</Loading>
            </LoaderDiv>
          </Container>
        )}
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

const Loading = styled.h2`
  color: white;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoaderDiv = styled.div`
  display: flex;
`;
