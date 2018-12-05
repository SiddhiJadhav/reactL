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
  switchNameHandler = (newName)=>{
    this.setState({
      person:[
        {name:newName,age:11}
      ]
    });
  }

  nameChangeHandler = (event)=>{
    this.setState({
      person:[
        {name:event.target.value, age:27}
      ]
    });
  }

  render() {
    return (
      <div className="App">
        
        {/* 1 Passing Method Reference */}
        {/* <Person name={this.state.person[0].name} age={this.state.person[0].age} click={this.switchNameHandler}>I am a programmer</Person> */}
        
        

        {/* 2 Passing Data
        <Person name={this.state.person[0].name} age={this.state.person[0].age}>I am a Algorithmist</Person>
        <button onClick={this.switchNameHandler.bind(this,"Sid")}>Click Me</button>
        <button onClick={()=>this.switchNameHandler("Rushi")}>Click Me2</button> */}

        {/* 3 Two Way Binding */}
        <Person name={this.state.person[0].name} changed={this.nameChangeHandler}></Person>


      </div>
    );
  }
}

export default App;
