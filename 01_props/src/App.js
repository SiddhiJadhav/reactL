import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Person name="ruturaj" age="20">I am a programmer</Person>
      </div>
    );
  }
}

export default App;
