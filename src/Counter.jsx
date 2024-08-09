import React, { useState } from "react";

function Counter() {
    const [counter, setCounter] = useState(0); 

    function minusOne(){
        setCounter(prevCount => prevCount - 1); //update function- better to use it instead of just count + 1
    };

    function reset() {
        setCounter(0); 
    };

    function plusOne() {
        setCounter(prevCount => prevCount + 1); 
    };

    return (
        <div className="counter-page">
            <div className="counter">
                <h2 className="counter-text">{counter}</h2>
                <button className="counter-buttons" onClick={minusOne}>-1</button>
                <button className="counter-buttons" onClick={reset}>Reset</button>
                <button className="counter-buttons" onClick={plusOne}>+1</button>
            </div>
        </div>
    );
}

export default Counter;
