import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


// import { IMAGES } from '../images/images';

export function GetMultiplePagesData({ title, url, callback }) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [itemsTotalNumber, setItemsTotalNumber] = useState(2);
  const [pageCounter, setPageCounter] = useState(1);

  useEffect(() => {
    if (items.length < itemsTotalNumber){
      // do {
        fetch(`${url}/?page=${pageCounter}`)
        .then((res) => res.json())
        .then(
          (result) => {
            // callback(result);
            setIsLoaded(true);
            setItems([...items, ...result.results]);
            setItemsTotalNumber(result.count);
            setPageCounter(pageCounter + 1)
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
            )
    } else {
      callback(items)
    }
  },[items])

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
      fetch(`${url}/?page=1`)
        .then((res) => res.json())
        .then(
          (result) => {
            // callback(result);
            setIsLoaded(true);
            setItems(result.results);
            setItemsTotalNumber(result.count);
            setPageCounter(2);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
          )
    }
  , []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return (
      <>
        <LoadingText>Loading {title} data...</LoadingText>
      </>
    );
  } else {
    return (
      <Div>
        <Graph>
          {/* {items.results &&
            items.results.map(
              (item) => isPlanetValid(item.name) && <GraphColumn key={item.name} item={item} />
            )} */}
        </Graph>
      </Div>
    );
  }
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
