import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    // using string variable
    let classes = '';
    
    if(true)
      classes += 'green ';
    if(true)
      classes += 'whiteText ';
    if(true)
      classes += 'boldText ';

    // using array variable
    classes = [];
    
    if(true)
      classes.push('green');
    if(true)
      classes.push('whiteText');
    if(true)
      classes.push('boldText');

    return (
      <div>
        <div className={classes.join(' ')}>
          TEST
        </div>
      </div>
    );
  }
}

export default App;
