import React, { useState } from "react";

const UsingOnClick = () => {

    const [counter, setCounter] = useState(0);

    return(
        <button onClick={()=>{setCounter(counter + 1)}}> pres me {counter} </button>
    );

};

export default UsingOnClick;

