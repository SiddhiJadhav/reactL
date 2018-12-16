// import React from 'react';
import React, { Component } from 'react';
import './Person.css';  


class Person extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
        console.log("Person.js CONSTRUCTOR");

    }
  
    componentWillMount(){
      console.log("Person.js COMPONENT WILL MOUNT");
    }
  
    componentDidMount(){
      console.log("Person.js COMPONENT DID MOUNT");
    }
      render() {
          console.log("Person.js RENDER");
        return (
            <div className="PersonStyle">

            <h2 onClick={this.props.click}>Hi My Name is {this.props.name}</h2>           
            <h2>Age :--> {this.props.age} </h2>    
            <h3>{this.props.children}</h3>
            <input onChange={this.props.changed} value={this.props.name}/>
        </div>  
        );
    }
}

export default Person;

// const person = (props)=>{
//     return(

//     )
// }

// export default person;