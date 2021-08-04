import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ClipLoader from "react-spinners/ClipLoader";

import { getMultiplePagesData } from '../api/get-multiple-pages-data-noreact';

export function People({ callback }) {
  const [isDone, setIsDone] = useState(false)
  
  const callbackWrapper = (data) => {
    setIsDone(true);
    callback(data)
  }
  
  useEffect(
    ()=>getMultiplePagesData('https://swapi.dev/api/people',callbackWrapper)
  ,[])

  return (
    <Container>
      {!isDone && 
      <LoaderDiv><ClipLoader color={'White'} loading={true}  size={50} /><Loading>Loading People Data...</Loading></LoaderDiv>
      }
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

const Loading = styled.h2`
  color: white;
`