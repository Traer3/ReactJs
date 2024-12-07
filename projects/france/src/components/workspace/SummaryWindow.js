import React, { useState } from "react";

const SummaryWindow  = () => {
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
            width:'300px',
            height:'450px',
            cursor: isDragging ? 'grabbing' : 'grab',

            
            background:'rgba(230,90,232, 0.8)',
            backdropFilter:'blur(5px)',
            boxShadow:`
                0 0 15px rgba(230, 90, 232, 0.8), 
                0 0 30px rgba(230, 90, 232, 0.6),
                0 0 45px rgba(230, 90, 232, 0.4)`,

            color:'rgb(116, 26, 143)',
            fontSize:'14px',
            fontWeight:'bold',
            padding:'4px',
            
        }}
        
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        >
        working summary
        </div>
    );
};

export default SummaryWindow;