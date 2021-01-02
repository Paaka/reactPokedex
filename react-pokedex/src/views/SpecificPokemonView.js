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
    const engAblities = ability.effect_entries.filter(entry => entry.language.name === 'en');
    if(engAblities.length < 1){
      return [{short_effect:"sorry no description is avalibe"}]
    }
    return engAblities[0];
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

  const checkMinAndMaxPokemonId = id =>{
    if(id <= 0){
      return 251;
    }else if(id > 251){
      return 1;
    }else{
      return id;
    }
  }

  const getInformationAboutNeighbourPokemon = async id => {
      let pokeID = checkMinAndMaxPokemonId(id);
      const {data} = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeID}`);
    
      return {
        name:data.name,
        pokedexID:pokeID,
        spriteURL:data.sprites.front_default,
      }
  }

  const getInfoAboutWeaknesses = async types => {
    const info = await Axios.get(types[0].type.url);
    const weakness = info.data.damage_relations.double_damage_from;

    if(types.length ===2){
      const infoAboutSecondWeaknes = await Axios.get(types[1].type.url);
      const secondWeakness = infoAboutSecondWeaknes.data.damage_relations.double_damage_from;
      return [...secondWeakness, ...weakness];
    }

    return weakness;

  }

  const FetchPokemon = async () => {
    const { data } = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`);
    data.description = await Axios.get(
      `https://pokeapi.co/api/v2/pokemon-species/${pokemonID}/`,
    ).then(res => res.data.flavor_text_entries[0].flavor_text);
    data.genders = await setPokemonGender(data.name);
    data.abilityInformation = await getInformationAboutAbility(data);
    data.nextPokemon = await getInformationAboutNeighbourPokemon(pokemonID+1);
    data.previousPokemon = await getInformationAboutNeighbourPokemon(pokemonID-1);
    data.weakness = await getInfoAboutWeaknesses(data.types);
    
    console.log(data);
    return data;
  };

  useEffect(() => {
    async function FetchData() {
      const data = await FetchPokemon();
      setPokemonData(data);
      SetIsLoaded(true);
    }

    FetchData();
  }, [isLoaded]);

  return (
    <MainTemplate>
      {isLoaded ? (
        <SpecficPokemonTemplate 
            pokemonID={pokemonID} 
            PokemonData={PokemonData} 
            changeLoadingFn={SetIsLoaded} />
      ) : (
        <LoadingTemplate />
      )}
    </MainTemplate>
  );
};

export default SpecificPokemonView;
