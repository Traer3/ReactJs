import React, { useEffect, useState } from "react";
import style from "../css/MenuScreen.module.css"
const TerminalWindow = ({filePath, customStyle, showTerminalWindow, setShowTerminalWindow}) => { 

    const [position, setPosition] = useState({x:0, y:0});
    const [isDragging, setIsDragging] = useState(false);
    const [offset, setOffset] = useState({x:0, y:0});
    const [content, setContent] = useState("");

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
    };

    const closeWindow = (event) =>{
        if(event.button === 1){
            setShowTerminalWindow(false)
        }
        
    }

    return(
        <div onMouseDown={closeWindow}>
            {showTerminalWindow && (
            <div className={style.TerminalWindow}
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

export default TerminalWindow;