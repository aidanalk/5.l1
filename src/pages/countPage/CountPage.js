import React, { useState } from "react";

function CountPage() {

    const [count, setCount] = useState(0)

    const addition = () => {
        setCount(count +1)
    }

    const subraction = () => {
        if(count>0){
            setCount(count -1)
        }
    }

    const clear = () => {
        setCount(count === 0)
    }
    
    const additionTen = () => {
        setCount(count +10)
    }

    const subractionTen = () => {
        if(count>0){
            setCount(count -10)
        }
    }

    return(
        <div>
            <p>count: {count}</p>
            <button onClick={addition}>+1</button>
            <button onClick={subraction}>-1</button>
            <button onClick={clear}>clear</button>
            <button onClick={additionTen}>+10</button>
            <button onClick={subractionTen}>-10</button>
        </div>
    )
}

export default CountPage