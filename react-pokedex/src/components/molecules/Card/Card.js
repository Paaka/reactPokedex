import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';

const Wrapper = styled.div`
  width: 200px;
  height: 300px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-self: center;
  margin-top: 10px;
  opacity: ${({ isLoaded }) => (isLoaded ? 1 : 0)};
  transition: opacity 0.25s;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 200px;
`;

const Card = ({ pokemon, id }) => {
  const [loaded, setIsLoaded] = useState(false);

  const onLoadFn = () => {
    setIsLoaded(true);
  };

  return (
    <Wrapper isLoaded={loaded}>
      <StyledImage src={pokemon.image} onLoad={onLoadFn} />
      <p>#{id}</p>
      <h3>{pokemon.name}</h3>
    </Wrapper>
  );
};

export default Card;
