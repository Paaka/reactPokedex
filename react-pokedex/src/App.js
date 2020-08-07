import React from 'react';
import './App.css';
import MainTemplate from './components/templates/MainTemplate/MainTamlate';
import Axios from 'axios';
import Card from './components/molecules/Card/Card';
import styled from 'styled-components';

const CardWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 20px;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, data: null };
    this.fetchKantoPokemon();
  }

  async fetchKantoPokemon() {
    Axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20')
      .then(res => {
        const pokemons = res.data.results;
        pokemons.forEach((element, index) => {
          element.image = `https://pokeres.bastionbot.org/images/pokemon/${index + 1}.png`;
        });
        this.setState({ loading: false, data: pokemons });
      })
      .catch(err => console.log(err));
  }

  generateList() {
    return (
      <CardWrapper>
        {this.state.data.map(pokemon => {
          return <Card pokemon={pokemon} />;
        })}
      </CardWrapper>
    );
  }

  render() {
    const { loading, data } = this.state;
    return <MainTemplate>{loading ? <h1>loading</h1> : this.generateList()}</MainTemplate>;
  }
}

export default App;
