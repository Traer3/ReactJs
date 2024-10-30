import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = ()=>{
        setCount(count + 1);
    };

    return(
        <div>
            <p>Count your days: {count}</p>
            <button onClick={handleIncrement}>Push coward </button>
        </div>
    );
};
export default Counter;

