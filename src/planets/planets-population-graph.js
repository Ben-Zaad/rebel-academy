import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { GraphColumn } from './graph-column';
import { GetMultiplePagesData } from '../api/get-multiple-pages-data';

// import { IMAGES } from '../images/images';

export function PlanetPopulationGraph({ callback }) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [plantes, setItems] = useState([]);

  const isPlanetValid = (planetName) => {
    const validPlanetsList = [
      'Tatooine',
      'Alderaan',
      'Naboo',
      'Bespin',
      'Endor',
    ];
    return validPlanetsList.includes(planetName);
  };

  useEffect(() => {
    console.log('Plantes ', plantes);
  }, [plantes]);

  return (
    <Div>
      <Graph>
        <GetMultiplePagesData
          title='Planets'
          url='https://swapi.dev/api/planets'
          callback={(data) => setItems(data)}
        />
        {plantes &&
          plantes
            .filter(
              (planet) =>
                planet.name === 'Tatooine' ||
                planet.name === 'Alderaan' ||
                planet.name === 'Naboo' ||
                planet.name === 'Bespin' ||
                planet.name === 'Endor'
            )
            .map((item) => <GraphColumn key={item.name} item={item} />)}
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

const LoadingText = styled.p`
  color: white;
`;
