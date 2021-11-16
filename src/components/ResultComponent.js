import React from 'react'

const ResultComponent = (props) => {
      const { number } = props
    return (
        <div className="display">
       {number}
        {/* <input type = 'text' placeholder= '0'{result}/> */}
        </div> 
    )
}

export default ResultComponent

