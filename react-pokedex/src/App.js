import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import routes from './routes/routes';
import MainView from './views/MainView';
import AllPokemonView from './views/AllPokemonView';
import { Provider } from 'react-redux';
import store from './store/store';
import SpecificPokemonView from './views/SpecificPokemonView';
import MovesView from './views/MovesView';
import GamesView from './views/GamesView';
import AboutView from './views/AboutView';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path={routes.main}>
              <MainView></MainView>
            </Route>
            <Route path={routes.all}>
              <AllPokemonView></AllPokemonView>
            </Route>
            <Route path={routes.specificPokemon}>
              <SpecificPokemonView></SpecificPokemonView>
            </Route>
            <Route path={routes.moves}>
              <MovesView />
            </Route>
            <Route path={routes.games}>
              <GamesView />
            </Route>
            <Route path={routes.about}>
              <AboutView></AboutView>
            </Route>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
