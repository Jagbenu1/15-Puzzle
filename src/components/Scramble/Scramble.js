import React from 'react';
import classes from './Scramble.module.css';

const scramble = props =>(
    <button 
        className={classes.Button}
        onClick={props.clicked}>
            {props.children}
    </button>
);

export default scramble;
