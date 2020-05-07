import React from 'react';
//import Auxilliary from '../../../hoc/Auxilliary';
import '../Puzzle.css';

const puzzlepieces = props =>(
    <div
        id={props.slideId} 
        className={ "tile" + props.num} 
        key={props.id}
        onClick = {props.click}
        >
        {props.number}
    </div>
);

export default puzzlepieces;