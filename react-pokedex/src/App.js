import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import routes from './routes/routes';
import MainView from './views/MainView';
import AllPokemonView from './views/AllPokemonView';
import { Provider } from 'react-redux';
import store from './store/store';

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
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
