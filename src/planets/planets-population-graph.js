import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { GraphColumn } from './graph-column';

export function PlanetPopulationGraph({ callback }) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch('https://swapi.dev/api/planets')
      .then((res) => res.json())
      .then(
        (result) => {
          callback(result);
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <><LoadingText>Loading...</LoadingText></>;
  } else {
    console.log('Items', items);
    return (
      <Graph>
        {items.results &&
          items.results.map((item) => (
            <GraphColumn item={item} />
          ))}
      </Graph>
    );
  }
}

const Graph = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 50vh;
  padding-left: 8vw;
`;

const LoadingText = styled.p`
  color: white;
`;
