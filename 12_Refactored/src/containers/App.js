import React, { Component } from 'react';

import styles from './App.module.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {

  state={
    person:[
      {id:'1',name:"Ruturaj",age:26},
      {id:'2',name:"Rutu",age:11},
      {id:'3',name:"raj",age:22}
    ],
    showToggle:false
  }

  showContent=()=>{
    let showT = this.state.showToggle;
    this.setState({
      showToggle:!showT
    });
  }
  
  deletePerson = (indexPerson)=>{
    const persons = [...this.state.person];
    persons.splice(indexPerson,1);
    this.setState({person:persons});
  }

  changeNameHandler=(event,id)=>{

    const realId = this.state.person.findIndex(p=>{
      return p.id===id
    });
    
    const realPerson = {...this.state.person[realId]};
    realPerson.name = event.target.value;
    
    const changedPersons = [...this.state.person];
    changedPersons[realId]=realPerson;
    
    this.setState({person:changedPersons});
  }


  render() {
    let persons=null;
    
    if(this.state.showToggle){
      persons = (
          <Persons
            persons={this.state.person}
            clicked={this.deletePerson}
            changed={this.changeNameHandler}
          />
      );
     }

    return (
      <div className={styles.App}>
          <Cockpit
            persons={this.state.person}
            show={this.showContent}
            showToggle={this.state.showToggle}
          />
          {persons}
      </div>
    );

  }

}

export default App;
