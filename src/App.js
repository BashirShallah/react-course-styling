import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    active: true
  }

  render() {
    const style = {color:'white', 'font-weight': 'bold'};

    if(this.state.active){
      style.color = 'blue';
    }

    return (
      <div>
        <div className={this.state.active ? 'green': 'red'} style={style}>
          Test 
        </div>

        <button onClick={()=>{this.setState({active: ! this.state.active})}}>
          change active
        </button>
      </div>
    );
  }
}

export default App;
