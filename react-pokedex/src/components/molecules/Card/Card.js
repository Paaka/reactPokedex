import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 200px;
  height: 300px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-self: center;
  margin-top: 10px;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 200px;
`;

const Card = ({ pokemon }) => (
  <Wrapper>
    <StyledImage src={pokemon.image} />
    <p>#003</p>
    <h3>{pokemon.name}</h3>
  </Wrapper>
);

export default Card;
