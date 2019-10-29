import React, { Component } from 'react' ;

class Counter extends Component {
  render() {
    return(
      <div>
        <h1>myCounter</h1>
        <button onClick={this.props.click}>+</button>
        <button>-</button>
        <h3>{this.props.store.getState().value}</h3>
      </div>
    );
  }
}

export default Counter ;