import { useState } from 'react';
import React from 'react'
const Counter = () => {

    const [counter, setCounter] =  useState(0);

    return (
        <div style={{textAlign:'left', marginLeft:'2em'}}>
        <h2>{counter}</h2>
        <button onClick={() => setCounter(counter+1)}>Counter</button>
        </div>
    )
}

export default Counter;
