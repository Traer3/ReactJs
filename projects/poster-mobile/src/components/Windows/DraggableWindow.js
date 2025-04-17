import React, { useEffect, useState } from "react";

const DraggableWindow = ({styleClass, initialX, initialY, children}) =>{
    const [position, setPosition] = useState({x: initialX, y: initialY});
    const [isDragging, setIsDragging] = useState(false);
    const [offset, setOffset] = useState({x: 0, y:0});

    const handleStart = (e) => {
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        setOffset({
            x: clientX - position.x,
            y: clientY - position.y,
        });
        setIsDragging(true);
    }
   

    useEffect(()=>{
        const  handleMove = (e) => {
            if (!isDragging) return;
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            const clientY = e.touches ? e.touches[0].clientY : e.clientY;
            setPosition({
                x: clientX - offset.x,
                y: clientY - offset.y,
            });
        };

        const handleEnd = () => setIsDragging(false);

        if(isDragging){
            window.addEventListener("mousemove",handleMove);
            window.addEventListener("mouseup",handleEnd);
            window.addEventListener("touchmove",handleMove);
            window.addEventListener("touchend",handleEnd);
        }
        return ()=>{
            window.removeEventListener("mousemove",handleMove);
            window.removeEventListener("mouseup",handleEnd);
            window.removeEventListener("touchmove",handleMove);
            window.removeEventListener("touchend",handleEnd);
        };
    },[isDragging, offset]);

    return(
        <div
            className={styleClass}
            onMouseDown={handleStart}
            onTouchStart={handleStart}
            style={{
                position:'absolute',
                top:`${position.y}px`,
                left:`${position.x}px`,
                cursor:isDragging ? 'grabbing' : 'grab',
                touchAction:'none',
                zIndex: isDragging ? 100 : 0,
                userSelect: isDragging ? 'none' : 'all',
            }}
        >
            {children}
        </div>
    );
};

export default DraggableWindow;