import React from 'react';
import './Person.css';
import Radium from 'radium';

const person = (props)=>{
    const style={
        '@media(min-width:500px)':{
            width:'450px'
        }
    }
    return(
        <div className="PersonStyle" style={style}>
            <h2 onClick={props.click}>Hi My Name is {props.name}</h2>           
            <h2>Age :--> {props.age} </h2>    
            <h3>{props.children}</h3>
            <input onChange={props.changed} value={props.name}/>
        </div>
    )
}

export default Radium(person);