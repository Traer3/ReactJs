import React, { useEffect, useState } from "react";

const TerminalWindow = ({
        filePath,
        style, 
        customStyle, 
        showTerminalWindow, 
        setShowTerminalWindow, 
        keyName,
        getPosition,
        posterStates,
        updatePosterState,
        positionName,
        posterName,
    }) => { 

    const [position, setPosition] = useState(getPosition || {x:0, y:0});
    const [isDragging, setIsDragging] = useState(false);
    const [offset, setOffset] = useState({x:0, y:0});
    const [content, setContent] = useState("");
    const [tapCount ,setTapCount] = useState(0);

    const [zIndex, setZIndex] = useState(0);

    useEffect(()=>{
        const fetchContent = async ()=> {
            try{
                const response = await fetch(filePath);
                const text = await response.text();
                setContent(text);
                
            }catch(error){
                console.log(error);
            }
        };
        fetchContent();
    },[filePath]);

    useEffect(()=>{
        if(getPosition){
            setPosition(getPosition);
        };
    },[getPosition]);

    const handleStart = (e) =>{
        //e.preventDefault(); there was  issue with scrolling =}
        e.stopPropagation();
        setIsDragging(true);
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        setOffset({
            x: clientX - position.x,
            y: clientY - position.y,
        });
        setZIndex(100)
    };
    const handleMove = (e) =>{
        if(!isDragging) return;
        //e.preventDefault(); there was  issue with scrolling =}
        e.stopPropagation();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        setPosition({
            x: clientX - offset.x,
            y: clientY - offset.y,
        });
        
    };

    const handleEnd = () =>{
        setIsDragging(false);
        setZIndex(0);
        handlePositionChange(positionName, posterName, position);
    };

    const handlePositionChange = async (key,posterName,newPosition) => {
        if(!updatePosterState){
            console.error("give me updatePosterState");
            return;
        }

        const updatedPosition = {
            ...posterStates,
            [key] : newPosition 
        }; 
        updatePosterState(posterName, updatedPosition)
    }

    const handleTripleTap =()=> {
        setTapCount((prev)=> prev + 1);
        setTimeout(()=> setTapCount(0), 500);

        if(tapCount === 2){
            setShowTerminalWindow(false);
        }
    };
    
    const closeWindow = (event) =>{
        if(event.button === 1){
            setShowTerminalWindow((prevStates)=>({
                ...prevStates,
                [keyName] : !prevStates[keyName],
            }));
        };
        
    }

    return(
        <div onMouseDown={closeWindow}>
            {showTerminalWindow && (
            <div className={style}
            style={{
                position:'absolute',
                top:`${position.y}px`,
                left:`${position.x}px`,
                cursor: isDragging ? 'grabbing' : 'grab',
                zIndex:zIndex,
                touchAction: 'none',
                ...customStyle,
            }}
            
            onMouseDown={handleStart}
            onMouseMove={handleMove}
            onMouseUp={handleEnd}
            onMouseLeave={handleEnd}
            
            onTouchStart={(e)=>{
                handleStart(e);
                handleTripleTap();
            }}
            onTouchMove={handleMove}
            onTouchEnd={handleEnd}
            >
                {content}
            </div>
            )}
        </div>
    );
};

export default TerminalWindow;