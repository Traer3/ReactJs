import React, { useState } from "react";

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
        <div style={{
            position:'absolute',
            top:`${position.y}px`,
            left:`${position.x}px`,
            border:'2px solid white',
            width:'300px',
            height:'300px',
            cursor: isDragging ? 'grabbing' : 'grab',

            background:'rgba(0,0,0, 0.5)',
            backdropFilter:'blur(5px)',

            color:'white',
            padding:'4px'
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