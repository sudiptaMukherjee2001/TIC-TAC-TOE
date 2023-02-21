import React from 'react'
import "../style/Square.css"
function Square({ icon, clickSquare }) {
    return (
        <>
            <div className="square" onClick={clickSquare}>

                <h5>{icon}</h5>
                {/* {console.log(icon)} */}
            </div>
        </>
    )
}

export default Square