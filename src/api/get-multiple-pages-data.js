import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


// import { IMAGES } from '../images/images';

export function GetMultiplePagesData({ url, callback }) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [itemsTotalNumber, setItemsTotalNumber] = useState(2);
  const [pageCounter, setPageCounter] = useState(2);

  useEffect(() => {
    console.log("ITEMS",items);
    console.log("itemsTotalNumber",itemsTotalNumber);
    if (items.length < itemsTotalNumber){
      console.log("pageCounter",pageCounter);
      // do {
        fetch(`${url}/?page=${pageCounter}`)
        .then((res) => res.json())
        .then(
          (result) => {
            // callback(result);
            console.log("Result",result.results);
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
  },[items, itemsTotalNumber])

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    let pageCounter = 1;
    // do {
      fetch(`https://swapi.dev/api/vehicles/?page=1`)
        .then((res) => res.json())
        .then(
          (result) => {
            // callback(result);
            console.log("Result",result.results);
            setIsLoaded(true);
            setItems(result.results);
            setItemsTotalNumber(result.count);
            ++pageCounter;
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
  //  while (items.length < itemsTotalNumber);
  //  while (pageCounter < 4);
  // }
  , []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return (
      <>
        <LoadingText>Loading...</LoadingText>
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
