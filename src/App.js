import React, { useState, useEffect } from 'react';
import './App.css';
import { PlanetPopulationGraph } from './planets/planets-population-graph';
import background from './images/bg.jpg';
import styled from 'styled-components';

function App() {
  // const [error, setError] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const callback = (data) => {
    setItems(data);
  }
  return (
    <AppRootDiv>
      <PlanetPopulationGraph callback={callback} />
    </AppRootDiv>
  )
}

const AppRootDiv = styled.div`
  width: 99vw;
  height: 100vh;
  background-image: url(${background});
`;

export default App;
