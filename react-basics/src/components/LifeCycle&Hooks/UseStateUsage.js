import React, { useState } from "react";


const UseStateUsage = ()=>{
    const [count, setCount] = useState(0);

    return(
        <div>
            <h1>How do you blink your eyes?</h1>
            <p>Let me help you count how many times you blinked: {count}</p>
            <button onClick={()=>{setCount(count +1)}}>Press to blink</button>
        </div>
    );
};

export default UseStateUsage;



