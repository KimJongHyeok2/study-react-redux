import React, { Component } from 'react';
import './App.css';

const INCREMENT = "INCREMENT";

function increase(diff) {
    return {
        type: INCREMENT,
        addBy: diff
    };
}

class App extends Component {
  constructor(props) {
      super(props);
      this.onClick = this.onClick.bind(this);
  }

  render() {

      let centerStyle = {
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          WebkitUserSelect: 'none',
          MozUserSelect: 'none',
          MsUserSelect:'none',
          userSelect: 'none',
          cursor: 'pointer'
      };

      return (
          <div
              onClick={ this.onClick }
              style={ centerStyle }
          >

              <h1> {this.props.store.getState().value} </h1>
              <h1> {this.props.store.getState().start} </h1>
          </div>
      )
  }

  onClick() {
      this.props.store.dispatch(increase(1));
  }
}

export default App;