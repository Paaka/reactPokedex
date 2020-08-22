import React from 'react';

const PokemonInformation = ({ pokeInfo }) => {
  const avalibleGenders = pokeInfo.genders.filter(gender => gender);

  return (
    <div>
      <p>Height</p>
      <p>{pokeInfo.height * 10} cm</p>
      <p>Weight</p>
      <p>{pokeInfo.weight / 10} kg</p>
      {console.log(avalibleGenders)}
    </div>
  );
};

export default PokemonInformation;
