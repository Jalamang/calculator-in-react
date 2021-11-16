import React from 'react'

const DigitsComponent = (props) => {
    const {handleDecimalPoint, handleZero }= props
    return (
        <div className="digits">
            <button
            type="button"
            name= "0"
            onClick={e => handleZero(e.target.name)}
            className="zero-btn"
            >0</button> 
           <button
           type="button" 
        name= "."
        onClick={e => handleDecimalPoint(e.target.name)}
           >.</button>  
        </div>
    )
}

export default DigitsComponent
