import React, { useEffect, useState } from "react";

const DraggableWindow = ({styleClass, initialX, initialY, children,id,onClose,state}) =>{
    const [position, setPosition] = useState({x: initialX, y: initialY});
    const [isDragging, setIsDragging] = useState(false);
    const [offset, setOffset] = useState({x: 0, y:0});

    const handleStart = (e) => {
        const tag =  e.target.tagName.toLowerCase();
        if(tag === 'textarea' || tag === 'input' || tag === 'select') return;

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

    const closeWindow = (event, id) =>{
        if(event.button === 1 && onClose){
            event.preventDefault();
            state = false;
            onClose(id);
        }
    };
    

    return(
        <div onMouseDown={(e)=> closeWindow(e,id)}>
            {state && 
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
                
                }}>
                    {children}
                </div>
            }
        </div>
    );
};

export default DraggableWindow;