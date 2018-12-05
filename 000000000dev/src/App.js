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
        {name:newName,age:11},
        {name:newName,age:11},
        {name:newName,age:11}
      ]
    });
  }


  render() {
    const styleButton={
      backgroundColor:'red',
      border:'0px'
    }

    return (
      <div className="App">

        <h1>WELCOME</h1>

        <Person name={this.state.person[0].name} age={this.state.person[0].age}></Person>
        <Person name={this.state.person[1].name} age={this.state.person[1].age}></Person>
        <Person name={this.state.person[2].name} age={this.state.person[2].age}></Person>

        <button style={styleButton} onClick={this.switchNameHandler.bind(this,"Sid")}>Click Me</button>
      </div>
    );
  }
}

export default App;
