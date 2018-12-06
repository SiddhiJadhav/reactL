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

    ],
    showToggle:false
  }

  showContent=()=>{
    let showT = this.state.showToggle;
    this.setState({
      showToggle:!showT
    });

  }

  render() {

    const styleButton={
      backgroundColor:'red',
      border:'0px',
      height:'20px'
    }

    let persons=null;
    if(this.state.showToggle){
      persons = (
        <div>

        <Person name={this.state.person[0].name} age={this.state.person[0].age}></Person>
        <Person name={this.state.person[1].name} age={this.state.person[1].age}></Person>
        <Person name={this.state.person[2].name} age={this.state.person[2].age}></Person>

        </div>
      );
    }


    return (
      <div className="App">

        <h1>WELCOME</h1>
        <button style={styleButton} onClick={this.showContent}>Click Me</button>

        {persons}
      </div>
    );
  }
}

export default App;
