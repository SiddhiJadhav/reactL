import React, { Component } from 'react';

import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';


class App extends Component {


  constructor(props){
    super(props);
    console.log("app.js CONSTRUCTOR");
  }

  componentWillMount(){
    console.log("app.js COMPONENT WILL MOUNT");
  }

  componentDidMount(){
    console.log("app.js COMPONENT DID MOUNT");
  }








  shouldComponentUpdate ( nextProps, nextState ) {
    console.log( '[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState );
    // return nextState.persons !== this.state.persons ||
    //   nextState.showPersons !== this.state.showPersons;
    return true;
  }

  componentWillUpdate ( nextProps, nextState ) {
    console.log( '[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState );
  }

  componentDidUpdate () {
    console.log( '[UPDATE App.js] Inside componentDidUpdate' );
  }





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
    console.log("app.js RENDER");
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
      <WithClass classes={classes.App}>          
      <Cockpit
            persons={this.state.person}
            show={this.showContent}
            showToggle={this.state.showToggle}
          />
          {persons}
      </WithClass>
    );

  }

}

export default App;
