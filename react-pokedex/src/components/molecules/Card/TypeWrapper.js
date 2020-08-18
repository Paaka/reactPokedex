import React from 'react';
import styled from 'styled-components';
import TypeItem from '../../atoms/TypeItem/TypeItem';

const TypeWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  min-height: 32px;
`;

const PokemonTypes = ({ types = [], id }) => {
  return (
    <TypeWrapper>
      {types.map((pokemonType, index) => {
        const itemKey = id + pokemonType.type.name;
        return <TypeItem key={itemKey}>{pokemonType.type.name}</TypeItem>;
      })}
    </TypeWrapper>
  );
};

export default PokemonTypes;
