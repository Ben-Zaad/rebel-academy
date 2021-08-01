import React from 'react';
import styled from 'styled-components';

export function GraphColumn({ item }) {
  const Container = styled.div`
    width: 5vw;
    align-self: center;
  `;

  const LegendDiv = styled.div`
    margin-top: 3vh;
  `;

  const PopulationCountDiv = styled.div`
    background-color: white;
    height: ${Math.log2(item.population)}vh;
    width: 2vw;
    margin-left: 1vw;
    position: absolute;
    bottom: 40vh;
    display: flex;
    justify-content: center;
  `;

  const NameText = styled.p`
    color: #FFE81F;
    text-align: center;
    margin-top: -7vh;
  `;

  const PopulationText = styled.p`
    color: #FFE81F;
    position: absolute;
    margin-top: -4vh;
  `;

  return (
    <Container>
      <LegendDiv>
        <NameText key={item.name}>{item.name}</NameText>
      </LegendDiv>
      <PopulationCountDiv>
        <PopulationText key={item.name}>{item.population}</PopulationText>
      </PopulationCountDiv>
    </Container>
  );
}
