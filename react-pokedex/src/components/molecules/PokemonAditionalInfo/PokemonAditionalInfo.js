import React from 'react';
import styled from 'styled-components';
import Paragraph from '../../atoms/Typography/Paragraph/Paragraph';
import PokemonInformation from '../PokemonInformation/PokemonInformation';
import TypeItem from '../TypeItem/TypeItem';

const AditionalInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  justify-self: center;
`;

const FlexWrapper = styled.div`
  display:flex;
  margin:10px 0;
`

const GridWrapper = styled.div`
  display:grid;
  width:600px;
  grid-row-gap:10px;
  grid-template-columns:repeat(4,1fr);
`


const PokemonAditionalInfo = ({ data }) => {
  const weakness = data.weakness;
  
  const formatPokemonDescription = () => {
    return data.description.replace(''," ");
  }

  const formatPokemonType = () => {
    if(data.types.length > 1){
      return "Types :"
    }else{
      return "Type :"
    }
  }

  return (
    <AditionalInfoWrapper>
      <p>Pokedex entry : {formatPokemonDescription()}</p>
      <PokemonInformation pokeInfo={data} />
      <Paragraph>{formatPokemonType()}</Paragraph>
      <FlexWrapper>
        {data.types.map(item => <TypeItem key={item.type.name} type={item.type.name} />)}
      </FlexWrapper>
      <Paragraph>Weaknesses :</Paragraph>
      <GridWrapper>
        {data.weakness.map(type => <TypeItem key={type.name} type={type.name} />)}
      </GridWrapper>
    </AditionalInfoWrapper>
  );
};

export default PokemonAditionalInfo;
