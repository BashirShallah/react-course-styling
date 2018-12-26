import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    className: 'green'
  }

  render() {
    return (
      <div>
        <div className={this.state.className}>
          Test 
        </div>
        <button onClick={()=>{this.setState({className: 'red'})}}>
          change to red
        </button>
        <button onClick={()=>{this.setState({className: 'green'})}}>
          change to green
        </button>
      </div>
    );
  }
}

export default App;
