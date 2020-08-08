import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Axios from 'axios';

//Componetns:
import AllPokemonsCardTemplate from '../components/templates/MainTemplate/AllPokemonsCardTemplate';
import MainTemplate from '../components/templates/MainTemplate/MainTamlate';

const AllPokemonView = () => {
  const [pokemons, setPokemons] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const location = useLocation();

  const CalculateStartingPoint = () => {
    const currentLocation = location.pathname.split('/');
    const currentMultiplier = currentLocation[2] * 1;
    if (Number.isInteger(currentMultiplier)) {
      return currentMultiplier * 20;
    } else {
      return 0;
    }
  };

  const fetch20Pokemon = async startingPoint => {
    const { data } = await Axios.get(
      `https://pokeapi.co/api/v2/pokemon?offset=${startingPoint}&limit=20`,
    );

    return data.results;
  };

  const addAdditionalInformationToPokemons = (arrayOfPokemons, currentRange) => {
    arrayOfPokemons.forEach((element, index) => {
      const pokemonIndex = index + currentRange + 1;
      element.index = pokemonIndex;
      element.image = `https://pokeres.bastionbot.org/images/pokemon/${pokemonIndex}.png`;
    });

    return arrayOfPokemons;
  };

  useEffect(() => {
    async function fetchData() {
      const startingPoint = CalculateStartingPoint();
      const APIData = await fetch20Pokemon();
      const updatedPokemons = addAdditionalInformationToPokemons(APIData, startingPoint);

      setPokemons(updatedPokemons);
      setIsLoaded(true);
    }

    fetchData();
  }, []);

  return (
    <MainTemplate>
      {isLoaded ? <AllPokemonsCardTemplate pokemons={pokemons} /> : <h1>Loading...</h1>}
    </MainTemplate>
  );
};

export default AllPokemonView;
