//Practicing UseState with a simple counter function. 
import React, { useState } from 'react'

function countInitial(){
    console.log("run Function")
    return 4;
}

export function Counter(){

const [ count, setCount ] = useState( () => countInitial());
const [ word, setWord ] = useState ('');

function decrement(){
  setCount( count => count - 1 );
    if ((count % 2) === 0){
      setWord('EVEN');
      }else{
          setWord("ODD");
          }
}

function increment(){
    setCount( count => count + 1);
    if ((count % 2) === 0){
        setWord('EVEN');
        }else{
            setWord("ODD");
            }
}

    return (
        <div className="App-header" >
            <h1>Simple Counter Tutorial</h1>
            <div>
                
                <button onClick={decrement}>-</button> 
                    <span>  {count}  {word}  </span>
                <button onClick={increment}>+</button>
                </div>

        </div>
    )
}
