import React, { Component } from 'react';
import sz from './App.css';
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

    let classes=[];
    console.log(sz);
    let persons=null;
    if(this.state.showToggle){
      persons = (
        <div>

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
      // style.backgroundColor="red";
    }
    return (
      <div className={classes.App}>
        <h1>WELCOME</h1>
        <p >THIS IS AWESOME</p>
        <button className={classes.btnstyle} onClick={this.showContent}>Click Me</button>
         
          {persons}
   
      </div>
      

    );

    
  }
}

export default App;
