import React, { useState } from "react";

const MouseTracker = () =>{
    const [position, setPosition] = useState({x: 0, y: 0,});
    const hadleMouseOver = (event) =>{
        setPosition({x: event.clientX, y: event.clientY});
    };

    return(
        <div onMouseOver={hadleMouseOver} style={{height:"200px", width:"200px" ,  border: "1px solid black"}}>
            <p>Mouse Position: ({position.x}, {position.y})</p>
        </div>
    );
};

export default MouseTracker;

