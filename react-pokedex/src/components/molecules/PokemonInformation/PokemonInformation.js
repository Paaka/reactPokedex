import React from 'react';
import styled from 'styled-components';

import QuestionMark from '../../../assets/information.svg';

const Wrapper = styled.div`
  background-color: red;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-radius: 10px;
`;

const PokemonInformation = ({ pokeInfo }) => {
  let isCardInReverse = false;
  const avalibleGenders = pokeInfo.genders.filter(pokemon => pokemon.gender);

  const showBackOfCard = () => {
    console.log('Odwracam Karte');
    isCardInReverse = !isCardInReverse;
  };

  return (
    <Wrapper>
      {isCardInReverse ? (
        <div>Odwrót</div>
      ) : (
        <div>
          <div>
            <p>Height</p>
            <p>{pokeInfo.height * 10} cm</p>
            <p>Weight</p>
            <p>{pokeInfo.weight / 10} kg</p>
            <p>Gender :</p>
            {avalibleGenders.map(gender => (
              <p key={gender.name}>{gender.name}</p>
            ))}
          </div>
          <div>
            <p>Ability</p>
            <p>{pokeInfo.abilities[0].ability.name}</p>
            <img src={QuestionMark} alt="Question mark" onClick={() => showBackOfCard()} />
          </div>
        </div>
      )}
    </Wrapper>
  );
};

export default PokemonInformation;
