import React, { useEffect, useState } from "react";

const UseEffectUsage = () => {

    const [count, setCount] = useState(0);

    useEffect(()=>{
        const timer = setInterval(()=>{
            setCount(prevCount => prevCount + 1);
        },1000);
        return ()=> clearInterval(timer);
    },[]);

    return(
        
            <p>Timer till u shit urself {count}</p>
        
    );
};

export default UseEffectUsage;

