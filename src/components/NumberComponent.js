import React from 'react'

const NumberComponent = (props) => {
    const{ whenNumberKeyPressed }= props
    // let displayButtons = []
    //     for (let i= 9; i >= 1; i--){
    //         displayButtons.push(<button
    //             onClick={e => calculate(e.target.name)}
    //             className="number-button"
    //             name= {i}
    //             key={i}
    //             type='submit'>{i}
    //             </button>)
    //     }
    

    return (
        <div className="integers">
           <button onClick={e => whenNumberKeyPressed(e.target.value)} className="number-button" value= "7" key={7} type="button">7 </button>
           <button onClick={e => whenNumberKeyPressed(e.target.value)} className="number-button" value= "8" key={8} type="button">8 </button>
           <button onClick={e => whenNumberKeyPressed(e.target.value)} className="number-button" value= "9" key={9} type="button">9 </button>
           <button onClick={e => whenNumberKeyPressed(e.target.value)} className="number-button" value= "4" key={4} type="button">4 </button>
           <button onClick={e => whenNumberKeyPressed(e.target.value)} className="number-button" value= "5" key={5} type="button">5 </button>
           <button onClick={e => whenNumberKeyPressed(e.target.value)} className="number-button" value= "6" key={6} type="button">6 </button>
           <button onClick={e => whenNumberKeyPressed(e.target.value)} className="number-button" value= "1" key={1} type="button">1 </button>
           <button onClick={e => whenNumberKeyPressed(e.target.value)} className="number-button" value= "2" key={2} type="button">2 </button>
           <button onClick={e => whenNumberKeyPressed(e.target.value)} className="number-button" value= "3" key={3} type="button">3 </button>
        </div>
    )
}

export default NumberComponent
