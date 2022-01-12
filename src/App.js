import React,{useState,useEffect} from 'react'
import './App.css';
import Confetti from "react-confetti";

function App () {
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
  const decrement = () => {
    setState(prev => prev - 1);
  }
  if (state === 750) {
    target = true;
  }
  if (state % 100 === 0 && state!==0) {
    minitarget = true;
  }



  return (
    <div className="App">
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
        You have done {state} actions!
        </div>
      <div className='btns'>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
      </div>
    </div>
  );
}

export default App;
