import React from 'react';
import Card from '../../molecules/Card/Card';
import styled from 'styled-components';

const CardWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 20px;
`;

const AllPokemonsCardTemplate = ({ pokemons }) => {
  return (
    <CardWrapper>
      {pokemons.map((pokemon, index) => (
        <Card key={index} id={pokemon.index} pokemon={pokemon} />
      ))}
    </CardWrapper>
  );
};

export default AllPokemonsCardTemplate;
