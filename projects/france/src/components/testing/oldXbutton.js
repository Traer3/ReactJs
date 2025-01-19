//Old button on terminal
import React, { useEffect, useState } from "react";
import style from "../css/MenuScreen.module.css"
const TerminalWindow = ({filePath, customStyle}) => {

    const [content, setContent] = useState("");

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

    const [closeButton, setCloseButton] = useState(true);

    const closeWindow = () => {
        setCloseButton(!closeButton);
    }

    return(
        <div>
            {closeButton && (
            <div className={style.TerminalWindow}
            style={{
                position:'absolute',
                top:`${position.y}px`,
                left:`${position.x}px`,
                cursor: isDragging ? 'grabbing' : 'grab',
                ...customStyle,
            }}
            
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            >
                <button style={{
                        color:'red',
                        padding:'0px',
                        border:'0px',
                        backgroundColor:'transparent',
                        fontWeight:'bolder',
                        float:'right',
                    }} onClick={closeWindow}>X</button>
                {content}
            </div>
            )}
        </div>
    );
};

export default TerminalWindow;