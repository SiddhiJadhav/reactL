import React from 'react';
import './Person.css';  

const person = (props)=>{
    return(
        <div className="PersonStyle">

            <h2 onClick={props.click}>Hi My Name is {props.name}</h2>           
            <h2>Age :--> {props.age} </h2>    
            <h3>{props.children}</h3>
        </div>
    )
}

export default person;