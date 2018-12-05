import React from 'react';

const person = (props)=>{
    return(
        <div>
            <h1>Hi My Name is {props.name}</h1>
            <h1>Age :--> {props.age} </h1>
            <h3>{props.children}</h3>
        </div>
    )
}

export default person;