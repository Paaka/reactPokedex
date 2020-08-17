import React from 'react';
import styled from 'styled-components';
import TypeItem from '../../atoms/TypeItem/TypeItem';

const TypeWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const PokemonTypes = ({ types = [] }) => {
  return (
    <TypeWrapper>
      {types.map(pokemonType => {
        console.log(pokemonType);
        return <TypeItem>{pokemonType.type.name}</TypeItem>;
      })}
    </TypeWrapper>
  );
};

export default PokemonTypes;
