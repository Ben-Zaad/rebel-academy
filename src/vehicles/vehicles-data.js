import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { GetMultiplePagesData } from '../api/get-multiple-pages-data';

// import { IMAGES } from '../images/images';

export function Vehicles({  }) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [vehicles, setItems] = useState([]);
  const [vehiclesTotalNumber, setItemsTotalNumber] = useState(2);
  const [pageCounter, setPageCounter] = useState(2);

  useEffect(() => {
    console.log("Vehicles",vehicles);
  },[vehicles])

    return (
      <Div>
        <Graph>
          <GetMultiplePagesData url='https://swapi.dev/api/vehicles' callback={data=>setItems(data)} />
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
