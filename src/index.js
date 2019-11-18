import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import counterApp from './reducers';

// const store = createStore(counterReducer);
// const render = () => {
//     const appElement = document.getElementById('root');
//     ReactDOM.render(<App store={store} />, appElement);
// };

/*
 * Store
 */
const store = createStore(counterApp);
const appElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  appElement
);

// store.subscribe(render);
// render();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();