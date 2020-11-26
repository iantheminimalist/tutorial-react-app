import React, { useReducer } from 'react';

const ACTIONS = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement'
};

function reducer(state, action){
    switch(action.type){
        case ACTIONS.INCREMENT: 
            return { count: state.count + 1 };
        case ACTIONS.DECREMENT:
            return{ count: state.count - 1 };
        default:
            return state;
    }
}

export default function CounterV2() {

    const [ state, dispatch ] = useReducer(reducer, { count: 0 } );

    function increment(){
        dispatch({ type: ACTIONS.INCREMENT });
    }
    function decrement(){
        dispatch({ type: ACTIONS.DECREMENT });
    }
    return (
        <div className="App-header" >
            <h3>Counter with useReducer</h3>
            <div>
                <button onClick={ decrement }> - </button>
                  {state.count}  
                <button onClick={ increment }> + </button>
            </div>
        </div>
    )
}
