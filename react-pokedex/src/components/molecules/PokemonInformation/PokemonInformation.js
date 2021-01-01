import React from 'react';
import styled from 'styled-components';

import QuestionMark from '../../../assets/SVGS/question.svg';
import FemaleGenderIcon from '../../../assets/SVGS/femenine.svg';
import MaleGenderIcon from '../../../assets/SVGS/male-gender.svg';

const Wrapper = styled.div`
  background-color: rgb(48,167,215);
  padding: 10px;
  border-radius: 10px;
  max-width:600px;
`;

const FrontOfCardContainer = styled.div`
  width:100%;
  display:grid;
  grid-template-columns:60% 1fr;
  grid-template-rows:1fr 1fr;
`;

const StyledBtn = styled.img`
  width:1rem;
  height:1rem;
  align-self:center;
  margin-bottom:10px;
  margin-left:10px;
`;

const FlexWrapper = styled.div`
  display:flex;
  align-items:center;
  cursor:pointer;
`;

const SmallHeading = styled.h4`
  font-family: 'Roboto', sans-serif;
  color:white;
  font-weight: 400;
  font-size: 1.2rem;
  margin:0;
`

const BigHeading = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 1.6rem;
  margin-top:10px;
  text-transform:capitalize;
`

const GenderContainer = styled.div`
  display:flex;

`

const StyledGenderIcon = styled.img`
  height:1.6rem;
  width:1.6rem;
  margin-left:20px;
  margin-top:20px;
`


const PokemonInformation = ({ pokeInfo }) => {
  let isCardInReverse = false;
  const avalibleGenders = pokeInfo.genders.filter(pokemon => pokemon.gender);

  const showBackOfCard = () => {
    console.log('Odwracam Karte');
    isCardInReverse = !isCardInReverse;
  };

  const GeneratePokemonGenderIcon = (gender) => {
    if(gender.name === 'male'){
      return <StyledGenderIcon src={MaleGenderIcon} key={gender.name} />
    }else if(gender.name === 'female'){
      return <StyledGenderIcon src={FemaleGenderIcon} key={gender.name} />
    }else{
      return <BigHeading key={gender.name}>Uknown</BigHeading>
    }
  }

  return (
    <Wrapper>
      {isCardInReverse ? (
        <div>Odwrót</div>
      ) : (
        <FrontOfCardContainer>
            <div>
              <SmallHeading>Height</SmallHeading>
              <BigHeading>{pokeInfo.height * 10} cm</BigHeading>
            </div>
            <div>
              <SmallHeading>Weight</SmallHeading>
              <BigHeading>{pokeInfo.weight / 10} kg</BigHeading>
            </div>
            <div>
            <SmallHeading>Gender</SmallHeading>
            <GenderContainer>
            {avalibleGenders.map(gender => GeneratePokemonGenderIcon(gender))}
            </GenderContainer>
          </div>
          <div>
            <SmallHeading>Ability</SmallHeading>
            <FlexWrapper onClick={() => showBackOfCard()}>
              <BigHeading>{pokeInfo.abilities[0].ability.name}</BigHeading>
              <StyledBtn src={QuestionMark} alt="Question mark" />
            </FlexWrapper>
          </div>
        </FrontOfCardContainer>
      )}
    </Wrapper>
  );
};

export default PokemonInformation;
