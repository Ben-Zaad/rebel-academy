import React from 'react';
import styled from 'styled-components';

import { getNumString } from '../utils/utils';

export function GraphColumn({ item }) {
  return (
    <Container>
      <LegendDiv>
        <NameText>{item.name}</NameText>
      </LegendDiv>
      <PopulationCountDiv height={`${(Math.log2(item.population)) * 1.1}vh`}>
        <PopulationText>{getNumString(item.population)}</PopulationText>
      </PopulationCountDiv>
    </Container>
  );
}



const PopulationCountDiv = styled.div`
background-color: white;
width: 2vw;
margin-left: 1vw;
position: absolute;
bottom: 40vh;
height: ${props => props.height};
display: flex;
justify-content: center;
`;

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
`;



const NameText = styled.p`
color: #FFE81F;
text-align: center;
margin-top: -12vh;
@media (max-width: 1400px) {
    margin-right: 10vw;
}
`;

const PopulationText = styled.p`
color: #FFE81F;
position: absolute;
margin-top: -4vh;
`;