import React from 'react'

const OperatorComponent = (props) => {
    const{handleSetCalcFunction, calculateFinalValue, handleBackSpace}= props
    return (
        <div className="operators">
           <button className="backspace"
        value= "←"
        onClick={() => handleBackSpace()}
           type="submit"
           >←</button> 
           <button 
        value= "/"
        onClick={e => handleSetCalcFunction(e.target.value)}
           type="submit"
           >÷</button> 
           <button 
      value= "*"
      onClick={e => handleSetCalcFunction(e.target.value)} 
           type="button"
           >×</button> 
           <button 
        value= "-"
        onClick={e => handleSetCalcFunction(e.target.value)} 
        type="button"
           >−</button> 
           <button 
        value= "+"
        onClick={e => handleSetCalcFunction(e.target.value)}
        type="button"
           >+</button>

           <button
           className="equal-sign-btn"
       value= "="
       type="button"
       onClick={() => calculateFinalValue()}
       
           >=</button> 
        </div>
    )
}

export default OperatorComponent
