import React from 'react';
import styled from 'styled-components';
import H2 from '../../atoms/Typography/H2/H2';
import PokemonAditionalInfo from '../../molecules/PokemonAditionalInfo/PokemonAditionalInfo';

const StyledImage = styled.img`
  height: 25rem;
  width: 25rem;
  background-color: #eee;
  justify-self: center;
  border-radius: 10px;
`;

const ImageAndDetailsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const SpecficPokemonTemplate = ({ PokemonData, pokemonID }) => {
  return (
    <div>
      <H2 size={32}>{PokemonData.name}</H2>
      <ImageAndDetailsContainer>
        <StyledImage src={`https://pokeres.bastionbot.org/images/pokemon/${pokemonID}.png`} />
        
        <PokemonAditionalInfo data={PokemonData}></PokemonAditionalInfo>
      </ImageAndDetailsContainer>
    </div>
  );
};

export default SpecficPokemonTemplate;
