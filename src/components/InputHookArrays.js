import React, { useState } from 'react'

export default function InputHookArrays() {
    const [ items , setItems ] = useState([]);

    const AddItem = () => {
        setItems( [...items, {
                    id: items.length,
                    value: Math.floor(Math.random() * 10) + 1
        }]);
    }

    return (
        <div className="App-header">
            <h3>useState Hook with Objects</h3>
        <div>
            <button onClick={AddItem}> Generate a Random Number</button>
            <h4>List of examples</h4>
            <ul>
                { items.map(item => (
                    <li id={item.id}> 
                        {item.value} 
                    </li>)
                )}               
            </ul>
        </div>        
        </div>
    )
}
