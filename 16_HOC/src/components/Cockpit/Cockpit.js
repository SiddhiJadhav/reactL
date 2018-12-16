import React from 'react';
// import './Cockpit.module.css';
import styles from './Cockpit.module.css';

const cockpit = (props) => {
    let rButton =''
    if(props.showToggle){
        rButton=styles.red;
    }
    let classes = [];
    if(props.persons.length<=2){
      classes.push(styles.red);
    }

    if(props.persons.length<=1){
      classes.push(styles.bold);
    }

    
    return (
        <div className={styles.Cockpit}>
            <h1>WELCOME</h1>
            <p className={classes.join(' ')}>THIS IS AWESOME</p>
            <button className={rButton} onClick={props.show}>Click Me</button>
        </div>
    );
}

export default cockpit;