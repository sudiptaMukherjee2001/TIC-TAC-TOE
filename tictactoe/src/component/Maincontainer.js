import React, { useState } from 'react'
import Square from './Square'
import "../style/Maincontainer.css"
function Maincontainer() {
    let [iconStore, setIconStore] = useState(Array(9).fill(null));//iconStore store the * and o but initialy it will store null
    let [whoseTurn, setWhoseTurn] = useState(false);
    //Winning logic
    let checkWinner = () => {
        let winCondition =
            [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6]
            ]
        for (let logic of winCondition) {// In for-of loop we are getting element . we are getting index of a element using for-in loop
            let [a, b, c] = logic;
            if (iconStore[a] === iconStore[b] && iconStore[a] === iconStore[c]) {
                return iconStore[b];

            }
        }

    };
    let winPerson = checkWinner();
    // Refresh the Game
    let refreshGame = () => {
        setIconStore(Array(9).fill(null))
        // console.log("refresh button clicked")

    }
    //Click in the square and display * or o
    let clickSquare = (index) => {
        if (iconStore[index] != null) {// It is a checking that if player already clicked the dice then they can not clicked same dice again
            return;
        }
        console.log("square clicked", index);
        let copyArray = [...iconStore];//initialy iconStore array is null
        copyArray[index] = whoseTurn ? "*" : "o";
        setIconStore(copyArray);
        setWhoseTurn(!whoseTurn);
    }
    return (
        <>
            <div className="mainContainer">
                {/* {console.log(winPerson)} */}

                <>
                    {winPerson ? <>
                        <p>{winPerson} won the match <button onClick={refreshGame}>Play again</button></p>
                    </> : <button onClick={refreshGame}>Play again</button>}
                    <p> </p>
                    <div className="row">
                        <Square icon={iconStore[0]}
                            clickSquare={() => clickSquare(0)} />
                        <Square icon={iconStore[1]}
                            clickSquare={() => clickSquare(1)} />
                        <Square icon={iconStore[2]}
                            clickSquare={() => clickSquare(2)} />
                    </div>
                    <div className="row">
                        <Square icon={iconStore[3]}
                            clickSquare={() => clickSquare(3)} />
                        <Square icon={iconStore[4]}
                            clickSquare={() => clickSquare(4)} />
                        <Square icon={iconStore[5]}
                            clickSquare={() => clickSquare(5)} />
                    </div>
                    <div className="row">
                        <Square icon={iconStore[6]}
                            clickSquare={() => clickSquare(6)} />
                        <Square icon={iconStore[7]}
                            clickSquare={() => clickSquare(7)} />
                        <Square icon={iconStore[8]}
                            clickSquare={() => clickSquare(8)} />
                    </div>
                </>


            </div>
        </>
    )
}

export default Maincontainer