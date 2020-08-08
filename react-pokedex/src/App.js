import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Axios from 'axios';
import Card from './components/molecules/Card/Card';

import routes from './routes/routes';
import MainView from './views/MainView';
import AllPokemonView from './views/AllPokemonView';

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

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={routes.main}>
            <MainView></MainView>
          </Route>
          <Route path={routes.all}>
            <AllPokemonView></AllPokemonView>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
