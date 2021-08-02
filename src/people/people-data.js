import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

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
    <div>
      {!isDone && 
      <Loading>Loading People Data...</Loading>
      }
    </div>
  );
}

const Loading = styled.h2`
  color: white;
`