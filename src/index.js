import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import * as serviceWorker from './serviceWorker';
const initialState = {
  value: 0,
  start: 0
}

const counterReducer = (state = initialState, action) => {
  switch(action.type) {
    case "INCREMENT":
      return Object.assign({}, state, {
        value: state.value + action.addBy,
        start: state.start + action.addBy + 5
      })
      default:
        return state;
  }
}
/*
 * Store
 */
const store = createStore(counterReducer);
const render = () => {
    const appElement = document.getElementById('root');
    ReactDOM.render(<App store={store} />, appElement);
};

store.subscribe(render);
render();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();