import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { createStore } from 'redux';
import Counter from './components/Counter';

const INCREMENT = "INCREMENT";

function increase(diff) {
    return {
        type: INCREMENT,
        addBy: diff
    };
}

const initialState = {
  value: 0
}

const counterReducer = (state = initialState, action) => {
  switch(action.type) {
    case INCREMENT:
      return Object.assign({}, state, {
        value: state.value + action.addBy
      })
      default:
        return state;
  }
}


const store = createStore(counterReducer);
class App extends Component {

  clickTest = () => {
    alert("테스트");
    store.dispatch(increase(1));
  }

  render() {
    return (
      <Counter store={store} click={() => this.clickTest()}/>
    )
  }
}

store.subscribe(App);
export default App;