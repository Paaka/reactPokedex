import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../../routes/routes';

const Wrapper = styled.div`
  width: 200px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-self: center;
  margin-top: 10px;
  opacity: ${({ isLoaded }) => (isLoaded ? 1 : 0)};
  transition: all 0.25s;
  align-items: flex-start;

  :hover {
    cursor: pointer;
    transform: translateY(-5px);
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 200px;
  background-color: #eee;
  border-radius: 10px;
`;

const StyledIndex = styled.p`
  margin: 2px;
  font-weight: 700;
  font-size: 12px;
  color: #666;
`;

const StyledPokemonName = styled.h3`
  margin: 5px 5px;
  font-weight: 700;
  text-transform: capitalize;
  color: black;
`;

const Card = ({ pokemon, id }) => {
  const [loaded, setIsLoaded] = useState(false);

  const onLoadFn = () => {
    setIsLoaded(true);
  };

  const createPokedexId = () => {
    if (id < 10) {
      return `#00${id}`;
    } else if (id < 100) {
      return `#0${id}`;
    } else {
      return `#${id}`;
    }
  };

  return (
    <Link to={routes.specificPokemonLink + id} style={{ textDecoration: 'none' }}>
      <Wrapper isLoaded={loaded}>
        <StyledImage src={pokemon.image} onLoad={onLoadFn} />
        <StyledIndex>{createPokedexId()}</StyledIndex>
        {/* <PokemonTypes types={pokemon.types} id={id} /> */}
        <StyledPokemonName>{pokemon.name}</StyledPokemonName>
      </Wrapper>
    </Link>
  );
};

export default Card;
