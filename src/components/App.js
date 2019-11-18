import React, { Component } from 'react';
// import './App.css';
import Counter from './Counter';
import Buttons from './Buttons';
import Option from './Option';

class App extends Component {
//   constructor(props) {
//       super(props);
//       this.onClick = this.onClick.bind(this);
//   }
  render() {
      return (
          <div style={{ textAlign: 'center' }}>
              <Counter/>
              <Option/>
              <Buttons/>
          </div>
      )
  }
}

export default App;