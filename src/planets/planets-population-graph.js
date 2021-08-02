import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { GraphColumn } from './graph-column';
import { GetMultiplePagesData } from '../api/get-multiple-pages-data';

// import { IMAGES } from '../images/images';

export function PlanetPopulationGraph({ callback }) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [plantes, setPlanets] = useState([]);

  const saveData = (data) => {
    setPlanets(data);
    callback(data);
  }

  return (
    <Div>
      <Graph>
        <GetMultiplePagesData
          title='Planets'
          url='https://swapi.dev/api/planets'
          callback={saveData}
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