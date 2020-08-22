import React from 'react';
import styled from 'styled-components';
import PokemonInformation from '../PokemonInformation/PokemonInformation';

const AditionalInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  justify-self: center;
`;

const AdtionalInfoCard = () => {
  return (
    <div>
      <p>Dodatkowe info</p>
    </div>
  );
};

const PokemonAditionalInfo = ({ data }) => {
  return (
    <AditionalInfoWrapper>
      <p>{data.description}</p>
      <PokemonInformation pokeInfo={data} />
    </AditionalInfoWrapper>
  );
};

export default PokemonAditionalInfo;
