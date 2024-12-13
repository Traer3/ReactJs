import React, { useState } from "react";
import style from "../css/MenuScreen.module.css"
const TerminalWindow = () => {

    const [position, setPosition] = useState({x:0, y:0});
    const [isDragging, setIsDragging] = useState(false);
    const [offset, setOffset] = useState({x:0, y:0});

    const handleMouseDown = (e) =>{
        setIsDragging(true);
        setOffset({
            x: e.clientX - position.x,
            y: e.clientY - position.y,
        });
    };

    const handleMouseMove = (e) =>{
        if(!isDragging) return;
        setPosition({
            x: e.clientX - offset.x,
            y: e.clientY - offset.y,
        });
    };

    const handleMouseUp = () =>{
        setIsDragging(false);
    };


    return(
        <div className={style.TerminalWindow}
        style={{
            position:'absolute',
            top:`${position.y}px`,
            left:`${position.x}px`,
            cursor: isDragging ? 'grabbing' : 'grab',
            marginLeft:'30vw'
        }}
        
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        >
            Ready to work!
        </div>
    );
};

export default TerminalWindow;