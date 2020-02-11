import React from 'react';
import './App.css';

class App extends React.Component {
  fetchKantoPokemon() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151').then(response => response.json());
  }

  render() {
    return <h1> Hello Pokemons</h1>;
  }
}

export default App;
