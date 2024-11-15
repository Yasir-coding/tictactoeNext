"use client"
import { useEffect, useState } from "react";

export default function Board() {

    const x = 20;
    const y = 20;
    const [ cell, setCell ] = useState( [] );   // state är en array som innehåller null, 'X', 'O' 
    const [ currentPlayer, setCurrentPlayer ] = useState( true );
    console.log( currentPlayer );
    
    
    const onClickBtn = ( cellIndex ) => {
        // console.log( cellIndex );
       setCell( oldstate => {
          const newState = [ ...oldstate ];

          if( currentPlayer ){
            setCurrentPlayer( false );
            newState[cellIndex] = 'X';

          } else {
            setCurrentPlayer( true );
            newState[cellIndex] = 'O';
          }

          return newState; 
       } )
        
    }

    useEffect(() => {

        const cells = [];
        for(let i=0; i < x * y; i++ ){
            cells.push(null);
        }
        setCell(cells);

    }, []);


    return(

        <div className="cell-container">
            {
                cell.map(
                    (e, i) => {
                        return <button className="button-style" key={ i } onClick={ () => { onClickBtn(i); }  } disabled={ e != null }>{ e }</button>
                    }
                )
            }
        </div>
    )
}