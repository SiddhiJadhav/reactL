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

  changeNameHandler=(event,id)=>{
    // console.log(event.target.value);
    const realId = this.state.person.findIndex(p=>{
      return p.id===id
    });
    // console.log(realId);
    const realPerson = {...this.state.person[realId]};
    realPerson.name = event.target.value;

    const changedPersons = [...this.state.person];
    changedPersons[realId]=realPerson;
    console.log(changedPersons);

    this.setState({person:changedPersons});
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
            click={this.deletePerson.bind(this,index)}
            changed={(event)=>this.changeNameHandler(event,person.id)}/>
          })
        }
      </div>
    );
  }
}

export default App;
