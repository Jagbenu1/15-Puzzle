import React, { Component } from 'react';
import Puzzlepieces from '../Puzzle/Puzzlepieces/Puzzlepieces';



class puzzle extends Component{
    render(){
        return this.props.puzzle.map((piece, index) =>{
            return(
                <Puzzlepieces 
                key={piece.id}
                number={piece.number}
                num={piece.num}
                slideId={piece.slideId}
                click={()=> this.props.clicked(piece.s1, piece.s2)}
                />
            );
        })
    }
};  

export default puzzle;