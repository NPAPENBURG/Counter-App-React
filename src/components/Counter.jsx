import React, { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    function increase (){
        setCount(count + 1)
    }

    function decrease (){
        if (count === 0) {
            console.log("hi")
        } else {
        setCount(count - 1)}
    }

    function reset (){
        setCount(count - count)
    }

    return (<div>
        <h1>{count}</h1>
        <button onClick={decrease}>-</button>
        <button onClick={increase}>+</button>
        <button onClick={reset}>↩</button>
    </div>);
}

export default Counter;