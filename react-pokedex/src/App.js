import React from 'react';
import './App.css';
import MainTemplate from './components/templates/MainTemplate/MainTamlate';
import Axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, data: null };
    this.fetchKantoPokemon();
  }

  async fetchKantoPokemon() {
    Axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151')
      .then(res => {
        const pokemons = res.data.results;
        this.setState({ loading: false, data: pokemons });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { loading, data } = this.state;
    return (
      <MainTemplate>{loading ? <h1>loading</h1> : <h2>loaded{console.log(data)}</h2>}</MainTemplate>
    );
  }
}

export default App;
