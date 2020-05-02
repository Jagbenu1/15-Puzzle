import React, {Component} from 'react';
import Auxilliary from '../../hoc/Auxilliary';
import Puzzle from '../../components/Puzzle/Puzzle';
import classes from './PuzzleBuilder.module.scss';
import Scramble from '../../components/Scramble/Scramble';
import '../../components/Puzzle/Puzzle.scss';


class PuzzleBuilder extends Component {

    constructor(){
        super();
        this.slide = this.slide.bind(this);
        this.swapTiles = this.swapTiles.bind(this);
        this.checkSlide = this.checkSlide.bind(this);
        this.set = this.set.bind(this);
        this.shuffle = this.shuffle.bind(this);
    }

    state = {
        puzzle: [
            {id: 'one', number: 1, num: 1, slideId: "1-1", s1: 1, s2: 1},{id: 'two', number: 2, num: 2, slideId: "1-2", s1: 1, s2: 2},
            {id: 'three', number: 3, num: 3, slideId: "1-3", s1: 1, s2: 3},{id: 'four', number: 4, num: 4, slideId: "1-4", s1: 1, s2: 4},
            {id: 'five', number: 5, num: 5, slideId: "2-1", s1: 2, s2: 1},{id: 'six', number: 6, num: 6, slideId: "2-2", s1: 2, s2: 2},
            {id: 'seven', number: 7, num: 7, slideId: "2-3", s1: 2, s2: 3},{id: 'eight', number: 8, num: 8, slideId: "2-4", s1: 2, s2: 4},
            {id: 'nine', number: 9, num: 9, slideId: "3-1", s1: 3, s2: 1},{id: 'ten', number: 10, num: 10, slideId: "3-2", s1: 3, s2: 2},
            {id: 'eleven', number: 11, num: 11, slideId: "3-3", s1: 3, s2: 3},{id: 'twelve', number: 12, num: 12, slideId: "3-4", s1: 3, s2: 4},
            {id: 'thirteen', number: 13, num: 13, slideId: "4-1", s1: 4, s2: 1},{id: 'fourteen', number: 14, num: 14, slideId: "4-2", s1: 4, s2: 2},
            {id: 'fifthteen', number: 15, num: 15, slideId: "4-3", s1: 4, s2: 3},{id: 'sixteen', number: '', num: 16, slideId: "4-4", s1: 4, s2: 4}
        ]
    }

    swapTiles = (cell1, cell2) => {

        
            

        //swap IDs
        let temp = document.getElementById(cell1).className;

        document.getElementById(cell1).className = document.getElementById(cell2);

        document.getElementById(cell2).className = temp;

        //swap number text

        let temp2 = document.getElementById(cell1).innerHTML;

        document.getElementById(cell1).innerHTML = document.getElementById(cell2).innerHTML;

        document.getElementById(cell2).innerHTML = temp2;
        

        //remove the animations
        document.getElementById(cell1).style.animation = "";
    }


      slide(row, column){
        let cur = document.getElementById(row + "-" + column).innerHTML;
        console.log(cur);
        
        if(cur != ''){
            
            let curId = row + "-" + column;
            console.log(curId);
            

            // get all positions of tiles next to click title
            let right = row + "-" + (column+1);
            let left = row + "-" + (column-1);
            let up = (row-1) + "-" + column;
            let down = (row+1) + "-" + column;

            console.log(right);
            console.log(left);
            console.log(up);
            console.log(down);
            

            //checks for white tiles on depending sides
            this.checkSlide(curId, right);
            this.checkSlide(curId, left);
            this.checkSlide(curId, up);
            this.checkSlide(curId, down);
        }
        // find empty tile, set background to empty
        // and set other tiles to the background image
        console.log("Skipped toooo!");
        
        this.set();
    }

     checkSlide(curTile, position){
        if(position[0] >= 1 && position[0] <= 4 && position[2] >= 1 && position[2] <= 4){
            if( document.getElementById(position).innerHTML===""){
                //adds pop animation
                console.log("Im in here too????");
                
                document.getElementById(position).style.animation = "pop . 5s";

                //swaps clicked tile and empty tile
                this.swapTiles(curTile, position);
                return;
            }
        }else{
            return;
        }
    }

   
     shuffle() {
        //shuffle multiple times using random row and col
        for(let i =0; i < 1000; i++){
            let c = Math.floor(Math.random()*4 + 1);
            let r = c;
            
            this.slide(r,c);
        }
        this.set();
    };

    componentDidMount(){
      this.set();
    }

     set(){
        for(var i = 1; i <= 16; i++){
            var a = document.getElementsByClassName("tile"+ i)[0];
            // console.log(a);
            
            //found empty tile, saves position
            if(a.innerHTML === ""){
                console.log("im in");
                
                a.style.background = "white"; 
                var row = parseInt(a.id[0]);
                    console.log(row);
                var col = parseInt(a.id[2]);
                    console.log(col);
            }
            else{
                console.log("Skipped!!!!!");
                a.style.backgroundImage = "url(../assets/images/cookie2.jpg)";
                //reset class
                a.classname = "tile"+i;
            }
    }
     //get right, left, top and down tiles from empty
     let right = document.getElementById(row + "-" + (col+1));
     let left = document.getElementById(row + "-" + (col-1));
     let up = document.getElementById((row-1) + "-" + col);
     let down = document.getElementById((row+1) + "-" + col);
 
     //set movable class to tiles around empty tile
     if(right){
         right.className = right.className + "movable";
     } 
     if(left){
         left.className = left.className + "movable";
     }
     if(up){
         up.className = up.className + "movable";
     }
     if(down){
         down.className = down.className + "movable";
     }
}

    render(){

        let puzzle = null;

        puzzle=(
            <Puzzle 
                puzzle={this.state.puzzle}
                clicked={this.slide}
            />
        );

        return(
            <Auxilliary classes={classes.Back}>
                 <Auxilliary classes={classes.Inside}>
                    <div className="Puzzle">
                        {puzzle}
                    </div>
                    <Scramble
                        clicked ={this.shuffle}
                    >Scramble</Scramble>
                </Auxilliary>
            </Auxilliary>
           
        );
    }
};

export default PuzzleBuilder;