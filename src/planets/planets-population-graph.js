import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ClipLoader from 'react-spinners/ClipLoader';

import { getMultiplePagesData } from '../api/get-multiple-pages-data-noreact';

import { GraphColumn } from './graph-column';

export function PlanetPopulationGraph({ callback }) {
  const [plantes, setPlanets] = useState([]);

  useEffect(
    () =>
      getMultiplePagesData('https://swapi.dev/api/planets', (data) => {
        setPlanets(data);
        callback(data);
      }),
    [callback]
  );

  return (
    <MainDiv>
      <Graph>
        {plantes.length > 0 ? (
          <GraphContainer>
            {plantes
              .filter(
                (planet) =>
                  planet.name === 'Tatooine' ||
                  planet.name === 'Alderaan' ||
                  planet.name === 'Naboo' ||
                  planet.name === 'Bespin' ||
                  planet.name === 'Endor'
              )
              .map((item) => (
                <GraphColumn key={item.name} item={item} />
              ))}
            <GraphSubTitle>
              Poplation Shown on a logarmitc (log2) scale
            </GraphSubTitle>
          </GraphContainer>
        ) : (
          <Container>
            <LoaderMainDiv>
              <ClipLoader color={'White'} loading={true} size={50} />
              <Loading>Loading Planets Data...</Loading>
            </LoaderMainDiv>
          </Container>
        )}
      </Graph>
    </MainDiv>
  );
}

const MainDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Graph = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 50vh;
`;

const GraphContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Loading = styled.h2`
  color: white;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoaderMainDiv = styled.div`
  display: flex;
`;

const GraphSubTitle = styled.h4`
  color: #ffe81f;
  font-style: italic;
  margin-top: -8vh;
  margin-left: 8vh;
  position: absolute;
  margin
`;
