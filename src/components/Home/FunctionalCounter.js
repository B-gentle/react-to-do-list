import React, {useState} from 'react';
import './counter.css';

const FunctionalCounter = () => {
  const  [counter, setCounter] = useState(0);

  let increase = ()=> {
      setCounter(counter+1);
  }
  let reset = ()=> {
    setCounter(0);
}
let decrease = ()=> {
    setCounter(counter-1);
}

  return (
    <div>
        <button onClick={increase}>Increase</button>
        <button onClick={reset}>Reset</button>
        <button onClick={decrease}>Decrease</button>
        <h3>{counter}</h3>
    </div>
  )
}

export default FunctionalCounter