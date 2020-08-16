import { createStore } from 'redux';

const initialState = {
  page: 0,
};

function MainStore(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

let store = createStore(
  MainStore,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
