import React from 'react';
import './App.css';
import Button from './components/atoms/Button/Button';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { kantoPokemon: this.fetchKantoPokemon() };
  }

  fetchKantoPokemon() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151').then(response => response.json());
  }

  render() {
    return <Button>XDD</Button>;
  }
}

export default App;
