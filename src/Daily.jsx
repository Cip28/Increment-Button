import React, { useState, useEffect } from 'react'
import Confetti from "react-confetti";
import './App.css';




export default function Daily(props) {
    const [state, setState] = useState(0);
    // const [action, setAction] = useState(false);
    let target;
    let minitarget;
    
    useEffect(() => {
      setState(JSON.parse(window.sessionStorage.getItem("count")));
    }, []);
  
    useEffect(() => {
      window.sessionStorage.setItem("count", state);
    }, [state]);
  
  
    const increment = () => {
      setState(prev => prev + 1);
    }
    const reset = () => {     
      if (window.confirm("Are you sure you want to reset the counter?") === true) {
        setState(0);
        
      }
      
    }
    const decrement = () => {
      setState(prev => prev - 1);
    }
    if (state === 750) {
      target = true;
    }
  if (state % 100 === 0 && state !== 0) {
    if (state === 0) {
      minitarget = false;       
      }
      minitarget = true;
    }
  
  

    return (
        <main className='daily'>
              <div>
                {target &&
                <div>
                    <Confetti/>
                    <h1>You have reached your target!</h1>
                </div>
                }
                {minitarget &&
                <div>
                    <Confetti/>
                    <h1>{state} actions out of 750.</h1>
                </div>
                }
                <div className='output'>
                    {state && (state === 1 ? <h3>You have done {state} action!</h3> : <h3>You have done {state} actions!</h3>)}
                </div>
                <div className='btns'>
                    <button onClick={decrement} disabled={state < 1 ? true : false}>-</button>
            <button onClick={increment}>+</button>
            <br/>
                    <button onClick={reset} style={{backgroundColor:"red"}}>Reset</button>
                </div>
             </div>
        </main>
    )
}
