import React, { useEffect, useState } from "react";


const SummaryWindow  = ({
            filePath,
            style, 
            customStyle,
            showSummaryWindow,
            setShowSummaryWindow,
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
    const [zIndex, setZIndex] = useState(0);
   
    useEffect(()=>{
        const fetchContent = async () =>{
            try{
                const response = await fetch(filePath);
                const text = await response.text();
                setContent(text);
            }catch (error){
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


    const handleMouseDown = (e) =>{
        e.preventDefault();
        setIsDragging(true);
        setOffset({
            x: e.clientX - position.x,
            y: e.clientY - position.y,
        });
        setZIndex(100)
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
    
   
    const closeWindow = (event) =>{
        if(event.button === 1){
            setShowSummaryWindow((prevStates)=>({
                ...prevStates,
                [keyName] : !prevStates[keyName],
            }));
        };
        
    }

    return(
        <div onMouseDown={closeWindow}>
            
            {showSummaryWindow && (

            <div className={style}
            style={{
                position:'absolute',
                top:`${position.y}px`,
                left:`${position.x}px`,
                cursor: isDragging ? 'grabbing' : 'grab',
                zIndex:zIndex,
                ...customStyle,
            }}
            
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            >
                {content}  
            </div>
            )}
        </div>
    );
};

export default SummaryWindow;