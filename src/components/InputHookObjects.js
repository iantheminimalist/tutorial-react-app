import React, { useState } from 'react';

export default function InputHookObjects() {
    const [ name , setName ] = useState( { firstname: '' , lastname: '' } );    
    
    return (
        <div className="App-header">
            <h3>useState Hook with Objects</h3>
        <form>
            <input  type="text" 
                    value={name.firstname} 
                    onChange={ e => setName({...name, firstname: e.target.value }) } 
            />
            <input  type="text" 
                    value={name.lastname} 
                    onChange={ e => setName({...name, lastname: e.target.value }) } 
            />

            <h2>Your name is {name.firstname} {name.lastname}. </h2>
            <p> {JSON.stringify(name)} </p>
        </form>
        </div>
    );
}
