import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ClipLoader from 'react-spinners/ClipLoader';

import { getMultiplePagesData } from '../api/get-multiple-pages-data-noreact';

export function Vehicles({ callback }) {
  const [isDone, setIsDone] = useState(false);

  useEffect(
    () =>
      getMultiplePagesData('https://swapi.dev/api/vehicles', (data) => {
        setIsDone(true);
        const filterdData = data.filter(
          (vehicles) => vehicles.pilots.length > 0
        );
        callback(filterdData);
      }),
    [callback]
  );

  return (
    <div>
      <Container>
        {!isDone && (
          <LoaderDiv>
            <ClipLoader color={'White'} loading={true} size={50} />
            <Loading>Loading Vehicles Data...</Loading>
          </LoaderDiv>
        )}
      </Container>
    </div>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoaderDiv = styled.div`
  display: flex;
`;

const Loading = styled.h2`
  color: white;
`;
