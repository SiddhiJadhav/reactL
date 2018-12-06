import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

  state={
    person:[
      {id:'1',name:"Ruturaj",age:26},
      {id:'2',name:"Rutu",age:11},
      {id:'3',name:"raj",age:22}
    ],
    anotherState:[

    ],

  }

  deletePerson = (indexPerson)=>{
    const persons = [...this.state.person];
    persons.splice(indexPerson,1);
    this.setState({person:persons});
  }


  render() {
    return (
      <div className="App">
        <h1>WELCOME</h1>
        {
          this.state.person.map((person,index)=>{
            return <Person 
            key={person.id} 
            name={person.name} 
            age={person.age} 
            click={this.deletePerson.bind(this,index)}/>
          })
        }
      </div>
    );
  }
}

export default App;
