import React from 'react';
import styled from 'styled-components';
import H2 from '../../atoms/Typography/H2/H2';
import Heading3 from '../../atoms/Typography/Heading3/Heading3';
import PokemonAditionalInfo from '../../molecules/PokemonAditionalInfo/PokemonAditionalInfo';
import TypeItem from '../../molecules/TypeItem/TypeItem';
import EvolutionChain from '../../organisms/EvolutionChain/EvolutionChain';
import NavigationBetweenPokemons from '../../organisms/NavigationBetweenPokemons/NavigationBetweenPokemons';

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

const HeadingWrapper = styled.div`
  width:100%;
  text-align:center;
  margin-top:30px;
`



const SpecficPokemonTemplate = ({ PokemonData, pokemonID, changeLoadingFn }) => {


  return (
    <div>
      <NavigationBetweenPokemons pokemonName={PokemonData.name} pokemonID={pokemonID} pokemonInfo={PokemonData} changeLoadingFn={changeLoadingFn}></NavigationBetweenPokemons>
      <ImageAndDetailsContainer>
        <StyledImage src={`https://pokeres.bastionbot.org/images/pokemon/${pokemonID}.png`} />
        <PokemonAditionalInfo data={PokemonData}></PokemonAditionalInfo>
      </ImageAndDetailsContainer>
      <HeadingWrapper>
      <Heading3 fontSize={28}>Evolutions :</Heading3>
      </HeadingWrapper>
      <EvolutionChain evolutionChain={PokemonData.evolutionChain} loadingFn={changeLoadingFn}/>
    </div>
  );
};

export default SpecficPokemonTemplate;
