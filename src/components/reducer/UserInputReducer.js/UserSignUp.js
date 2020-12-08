import React, { useReducer, useState } from 'react';

const ACTIONS = {
    ADD_USER : 'ADD_USER'
}
 function addUser( state, firstname, lastname ){
    return { id: state.length, firstname: firstname, lastname: lastname }
}; 

function reducer(state, action ){
    switch(action.type){
        case ACTIONS.ADD_USER:
            return [...state, addUser(state , action.payload.firstname, action.payload.lastname)];
        default:
            return state;
    }

}

export default function UserSignUp() {

    const [ state , dispatch ] = useReducer(reducer , [] )
    const [ firstname, setFirstname ] = useState('');
    const [ lastname, setLastname ] = useState('');
    
    
 const handleSubmit = (e) => {
     e.preventDefault();
     dispatch({ type: ACTIONS.ADD_USER, payload: {firstname: firstname , lastname: lastname} });
     setFirstname('');
     setLastname('');
 }
 console.log(state);
    return (
        <div className="App-header">
            <h3>User SignUp Form with useReducer </h3>

        <form onSubmit={handleSubmit}>
        <input 
                type="text"
                name="firstname"
                value={firstname}
                onChange={ e => setFirstname(e.target.value)}
                required
            />
                        <input 
                type="text"
                name="lastname"
                value={lastname}
                onChange={ e => setLastname(e.target.value)}
                required
            />
        <button onSubmit={handleSubmit} >Submit</button>
        </form>
        {JSON.stringify(state)}
    
        </div>
    )
}
