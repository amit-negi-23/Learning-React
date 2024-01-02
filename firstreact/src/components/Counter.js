import React, { useState } from "react";

export default function Counter(props){

    const [count , setCount] =useState(0)

    function increment(){
        setCount(count+1)
       
    }
    function decrement(){
        setCount(count-1)
    }
    return(
        <div className="container">
                <h1>{count}</h1>
                <p>{props.content}</p>
                <button className="me-2" onClick={increment}>Increment</button>
                <button className="me-2" onClick={decrement}>decrement</button>
        </div>
    )
}