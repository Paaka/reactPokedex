import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import MainTemplate from '../components/templates/MainTemplate/MainTamlate';
import { useLocation } from 'react-router-dom';
import SpecficPokemonTemplate from '../components/templates/SpecificPokemon/SpecificPokemonTemplate';
import LoadingTemplate from '../components/templates/LoadingTemplate/LoadingTemplate';

const SpecificPokemonView = () => {
  const location = useLocation();
  const [PokemonData, setPokemonData] = useState({});
  const [isLoaded, SetIsLoaded] = useState(false);
  const pokemonID = location.pathname.substring(17, 20) * 1;

  const getInformationAboutAbility = async data => {
    const { abilities } = data;

    const ability = await Axios.get(abilities[0].ability.url).then(res => res.data);

    return ability.effect_entries[0];
  };

  const checkPokemonGender = (res, pokemonName) => {
    const arrayOfPokemons = res.data.pokemon_species_details;
    if (Array.isArray(arrayOfPokemons)) {
      const x = arrayOfPokemons.filter(pokemon => pokemon.pokemon_species.name === pokemonName);
      if (x.length > 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

  const setPokemonGender = async pokemonName => {
    const genders = [];
    const can_be_female = await Axios.get(`https://pokeapi.co/api/v2/gender/1`).then(res =>
      checkPokemonGender(res, pokemonName),
    );
    genders.push({ gender: can_be_female, name: 'female' });

    const can_be_male = await Axios.get(`https://pokeapi.co/api/v2/gender/2`).then(res =>
      checkPokemonGender(res, pokemonName),
    );
    genders.push({ gender: can_be_male, name: 'male' });

    const gender_unkown = !can_be_female && !can_be_male;
    genders.push({ gender: gender_unkown, name: 'unknown' });

    return genders;
  };

  const FetchPokemon = async () => {
    const { data } = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`);
    data.description = await Axios.get(
      `https://pokeapi.co/api/v2/pokemon-species/${pokemonID}/`,
    ).then(res => res.data.flavor_text_entries[0].flavor_text);
    data.genders = await setPokemonGender(data.name);
    data.abilityInformation = await getInformationAboutAbility(data);

    return data;
  };

  useEffect(() => {
    async function FetchData() {
      const data = await FetchPokemon();

      setPokemonData(data);
      SetIsLoaded(true);
    }

    FetchData();
  }, []);

  return (
    <MainTemplate>
      {isLoaded ? (
        <SpecficPokemonTemplate pokemonID={pokemonID} PokemonData={PokemonData} />
      ) : (
        <LoadingTemplate />
      )}
    </MainTemplate>
  );
};

export default SpecificPokemonView;
