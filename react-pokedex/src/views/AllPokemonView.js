import React, { useEffect, useState } from 'react';
import MainTemplate from '../components/templates/MainTemplate/MainTamlate';
import Axios from 'axios';
import AllPokemonsCardTemplate from '../components/templates/MainTemplate/AllPokemonsCardTemplate';
import { useLocation } from 'react-router-dom';

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

  useEffect(() => {
    async function fetch20Pokemon() {
      const currentOffset = CalculateStartingPoint();
      console.log(currentOffset);
      const { data } = await Axios.get(
        `https://pokeapi.co/api/v2/pokemon?offset=${currentOffset}&limit=20`,
      );
      const APIData = data.results;
      APIData.forEach((element, index) => {
        const pokemonIndex = index + currentOffset + 1;
        element.image = `https://pokeres.bastionbot.org/images/pokemon/${pokemonIndex}.png`;
      });
      setPokemons(APIData);
      setIsLoaded(true);
    }

    fetch20Pokemon();
  }, []);

  return (
    <MainTemplate>
      {isLoaded ? <AllPokemonsCardTemplate pokemons={pokemons} /> : <h1>Loading...</h1>}
    </MainTemplate>
  );
};

export default AllPokemonView;
