// import React from 'react'
import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
    console.log("Persons.js CONSTRUCTOR");

  }

  componentWillMount(){
    console.log("Persons.js COMPONENT WILL MOUNT");
  }

  componentDidMount(){
    console.log("Persons.js COMPONENT DID MOUNT");
  }




  render() {
    console.log("Persons.js RENDER")
    return (
      this.props.persons.map((person,index)=>{
        return <Person 
        key={person.id} 
        name={person.name} 
        age={person.age} 
        click={this.props.clicked.bind(this,index)}
        changed={(event)=>this.props.changed(event,person.id)}/>
      })
  
    );
  }
}

export default Persons;


// const persons = (props) => (
    
        
// );

// export default persons;