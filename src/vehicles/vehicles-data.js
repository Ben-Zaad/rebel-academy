import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ClipLoader from 'react-spinners/ClipLoader';

import { getMultiplePagesData } from '../api/get-multiple-pages-data-noreact';

export function Vehicles({ callback }) {
  const [isDone, setIsDone] = useState(false);
  const [error, setError] = useState(null);

  useEffect(
    () =>
      getMultiplePagesData('https://swapi.dev/api/vehicles', (data) => {
        setIsDone(true);
        const filterdData = data.filter(
          (vehicles) => vehicles.pilots.length > 0
        );
        callback(filterdData);
      },setError),
    [callback]
  );

  return (
    <Container>
    {error ? (
      <PageText>{error}</PageText>
    ) : !isDone && <LoaderDiv>
    <ClipLoader color={'White'} loading={true} size={50} />
    <PageText>Loading Vehicles Data...</PageText>
  </LoaderDiv>}
  </Container>
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

const PageText = styled.h2`
  color: white;
`;
