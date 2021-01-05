import React from 'react';
import Card from '../../molecules/Card/Card';
import styled from 'styled-components';
import NavigationBetweenPokemons from '../../molecules/NavigationBetweenPokemons/NavigationBetweenPokemons';

const CardWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 20px;
  justify-items:center;
`;

const AllPokemonsCardTemplate = ({ pokemons, page, pageFn }) => {
  return (
    <div>
      <CardWrapper>
        {pokemons.map((pokemon, index) => (
          <Card key={index} id={pokemon.index} pokemon={pokemon} />
        ))}
      </CardWrapper>
      <NavigationBetweenPokemons page={page} pageFn={pageFn} />
    </div>
  );
};

export default AllPokemonsCardTemplate;
