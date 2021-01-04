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

    const findDulplicates = (arr) => {
      const arrToReturn = [];

      arr.filter(type => {
         const pokemonTypeWithoutDuplicate = weakness.filter(orginalWeakness => type.name === orginalWeakness.name);
         arrToReturn.push(...pokemonTypeWithoutDuplicate);
      });
      return arrToReturn;
    }

    const removeDuplicates = (arrToRemoveFrom, duplicates) => {
        const arrWithoutDuplicates = arrToRemoveFrom.filter(type => duplicates.every(duplicate => {
          return duplicate.name !==type.name;
        }));
        
        return arrWithoutDuplicates;
    }

    if(types.length ===2){
      const infoAboutSecondWeaknes = await Axios.get(types[1].type.url);
      const secondWeakness = infoAboutSecondWeaknes.data.damage_relations.double_damage_from;
      const duplicates = findDulplicates(secondWeakness);
      const withoutDuplicates = removeDuplicates(secondWeakness,duplicates);
      return [...weakness, ...withoutDuplicates];
    }

    return weakness;

  }

  

  const getEvolutionChain = async pokemonData => {
    const {data} = await Axios.get(pokemonData.species.url);
    const x = await Axios.get(data.evolution_chain.url);
    const evolutionChain = [];

    const getPokemonEvolutionInformation = async (species) => {
      const evolutionInformation = await Axios.get(species.url);
      if(evolutionInformation.data.id >252) return;
      
      const pokemonImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${evolutionInformation.data.id}.png`
      return{
        name:species.name,
        pokemonImage,
        pokedexID: evolutionInformation.data.id,
      };
    };

    const firstEvolution = await getPokemonEvolutionInformation(x.data.chain.species);
    if(firstEvolution !== undefined){
      evolutionChain.push(firstEvolution);
    }

    if(x.data.chain.evolves_to.length > 0 && x.data.chain.evolves_to.length < 2){
      const secondEvolutions = await  getPokemonEvolutionInformation(x.data.chain.evolves_to[0].species);
      if(secondEvolutions !== undefined){
        evolutionChain.push(secondEvolutions);
      }
    
      
      if(x.data.chain.evolves_to[0].evolves_to.length > 0 &&x.data.chain.evolves_to[0].evolves_to.length < 2){
        const thirdEvo =  await getPokemonEvolutionInformation(x.data.chain.evolves_to[0].evolves_to[0].species);
        if(thirdEvo !== undefined){
          evolutionChain.push(thirdEvo);
        }
      }
    }

    if(x.data.chain.evolves_to.length > 1){
      for(let i = 0;i < x.data.chain.evolves_to.length; i++){
        const secondEvolutions = await  getPokemonEvolutionInformation(x.data.chain.evolves_to[i].species);
        if(secondEvolutions !== undefined){
          evolutionChain.push(secondEvolutions);
        }
      }
    }

    if(x.data.chain.evolves_to[0].evolves_to.length > 1){
      for(let i = 0;i < x.data.chain.evolves_to[0].evolves_to.length; i++){
        const thirdEvolutions = await  getPokemonEvolutionInformation(x.data.chain.evolves_to[0].evolves_to[i].species);
        if(thirdEvolutions !== undefined){
          evolutionChain.push(thirdEvolutions);
        }
      }
    }

    return evolutionChain;
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
    data.evolutionChain = await getEvolutionChain(data)
    
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
