import React from 'react';
import styled from 'styled-components';

export function GraphColumn({ item }) {
  const Container = styled.div`
    width: 5vw;
    align-self: center;
    @media (max-width: 1400px) {
        width: 10vw;
    }
    @media (max-width: 660px) {
        width: 15vw;
    }
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
    margin-top: -14vh;
    @media (max-width: 1400px) {
        margin-right: 10vw;
    }
  `;

  const PopulationText = styled.p`
    color: #FFE81F;
    position: absolute;
    margin-top: -4vh;
  `;

  return (
    <Container>
      <LegendDiv>
        <NameText>{item.name}</NameText>
      </LegendDiv>
      <PopulationCountDiv>
        <PopulationText>{item.population}</PopulationText>
      </PopulationCountDiv>
    </Container>
  );
}
