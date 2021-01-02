import React, {useState} from 'react';
import styled from 'styled-components';

import QuestionMark from '../../../assets/SVGS/question.svg';
import FemaleGenderIcon from '../../../assets/SVGS/femenine.svg';
import MaleGenderIcon from '../../../assets/SVGS/male-gender.svg';
import Paragraph from '../../atoms/Typography/Paragraph/Paragraph';
import Heading3 from '../../atoms/Typography/Heading3/Heading3';

const Wrapper = styled.div`
  background-color: ${({isReverse})=> isReverse ? '#313131' :'rgb(48,167,215)'};
  padding: 10px;
  border-radius: 10px;
  max-width:600px;
  height:180px;
  transition:background-color 0.25s ease-in-out;
  position:relative;
  overflow:hidden;
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

const CloseContainer = styled.div`
  position:absolute;
  width:15%;
  height:30px;
  right:0px;
  top:0px;
  background-color:#222;
  color: white;
  display:flex;
  justify-content:center;
  align-items: center;
  cursor:pointer;
  clip-path:polygon(0% 0%, 100% 0%, 100% 100%, 17.5% 100%, 0% 50%);
`

const BackOfTheCardWrapper = styled.div`
  display:flex;
  flex-direction:column;
  max-height:540px;
  width:100%;
`


const PokemonInformation = ({ pokeInfo }) => {
  let [isCardInReverse, setIsCardInReverse] = useState(false);
  const avalibleGenders = pokeInfo.genders.filter(pokemon => pokemon.gender);

  const showBackOfCard = () => {
    console.log('Odwracam Karte');
    setIsCardInReverse(!isCardInReverse);
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
    <Wrapper isReverse={isCardInReverse}>
      {isCardInReverse ? (
        <div>
          <CloseContainer onClick={showBackOfCard}>Close &#10006;</CloseContainer>
          <BackOfTheCardWrapper>
            <Paragraph fontSize={14} fontColor="#666">Ability Info</Paragraph>
            <Heading3 margin="10px 0px 0px 0px" fontColor="#eee" fontSize={28} textTransform="capitalize">{pokeInfo.abilities[0].ability.name}</Heading3>
            <Paragraph fontColor="#eee">{pokeInfo.abilityInformation.short_effect}</Paragraph>
          </BackOfTheCardWrapper>
        </div>
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
