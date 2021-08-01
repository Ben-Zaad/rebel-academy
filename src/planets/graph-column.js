import React from 'react';
import styled from 'styled-components';

export function GraphColumn({ item }) {
  const Div = styled.div`
    width: 80vw;
  `;

  const LegendDiv = styled.div`
    margin-top: 3vh;
  `;

  const PopulationCountDiv = styled.div`
    background-color: white;
    height: ${Math.log(item.population)}vh;
    width: 2vw;
    margin-left: 1vw;
    // margin-top: -40vh;
    position: absolute;
    bottom: 50vh;
  `;

  const LoadingText = styled.p`
    color: white;
  `;

  const PopulationText = styled.p`
    color: white;
    position: absolute;
    margin-top: -4vh;
  `;

  return (
    <Div>
      <LegendDiv>
        <LoadingText key={item.name}>{item.name}</LoadingText>
      </LegendDiv>
      <PopulationCountDiv>
        <PopulationText key={item.name}>{item.population}</PopulationText>
      </PopulationCountDiv>
    </Div>
  );
}
