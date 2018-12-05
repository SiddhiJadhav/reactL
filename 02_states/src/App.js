import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state={
    person:[
      {name:"Ruturaj",age:26},
      {name:"Rutu",age:11},
      {name:"raj",age:22}
    ],
    anotherState:[

    ]
  }
  switchNameHandler = ()=>{
    this.setState({
      person:[
        {name:"Akshay",age:26}
      ]
    });
  }

  render() {
    return (
      <div className="App">
        
        
        <Person name={this.state.person[0].name} age={this.state.person[0].age}>I am a programmer</Person>
        <button onClick={this.switchNameHandler}>Click Me</button>
      
      </div>
    );
  }
}

export default App;
