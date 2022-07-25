import { useCounter, useFetch } from "../hooks";
import { ButtonNext,Quote } from "./Components";

export const MultipleCustoomsHooks = () => {

const { counter, incrementar,aleatorio,decrementar } = useCounter();
const { data, isLoading } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
const { quote, author } = !!data && data[0];
console.log(counter)
  if(isLoading) { return ( <img src="./breaking-bad.png" alt="icon" /> ) } 

  return (
    <>
        <h1>Breaking Bad</h1>
        <hr />

        <Quote quote={quote} author={author} />

        <ButtonNext nameButton={'NEX QUOTE'} accion={incrementar} />

        <button className="btn" onClick={ aleatorio } >RANDOM</button>
    </>
  )
}
