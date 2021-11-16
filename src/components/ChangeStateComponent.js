
const ChangeStateComponent =(props) => {
  const { resetAllBtn, handlePercentage, handleToggleNegative } = props
        return (
        <div className="change-state">
           <button
            value= "AC"
            onClick={e => resetAllBtn(e.target.value)} 
            className="all-clear" 
           type="submit"
           >AC</button> 
           <button
           value= "+/-"
           onClick={e => handleToggleNegative(e.target.value)} 
           className="plus-minus" 
           type="submit"
           >±</button> 
           <button
           value= "%"
            onClick={() => handlePercentage()}  
           className="percent" 
          
           >%</button> 
        </div>
    ) 
    }

   




export default ChangeStateComponent

