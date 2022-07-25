import { useState } from "react";

export const useCounter = (value = 1) => {

    const [counter, setCounter] = useState(value);
    
    const al = Math.floor((Math.random() * 25)+1 );

    const incrementar = () => { setCounter(counter + 1 ) };
    const reset       = () => { setCounter(value)};
    const decrementar = () => { (counter === 0) ? 0 : setCounter(counter - 1) ;};
    const aleatorio   = () =>   setCounter( al );


  return {
    counter,
    incrementar,
    reset,
    decrementar,
    aleatorio
  }
}
