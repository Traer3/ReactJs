import React, { useEffect, useRef, useState } from "react";
import style from "./Textarea.module.css"

const Textarea = () => {
    const [inputData, setInputData] = useState("");
    const textareaRef = useRef(null);
    const [editTable, setEditTable] = useState(false);
    const wrapperRef = useRef(null);
    const isResizingRef = useRef(false);
    useEffect(()=>{
        if(textareaRef.current){
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    },[inputData]);
    
    //некорректная работа элемента  
    useEffect(()=>{
        const handleMouseMove = (e) =>{
            if(!isResizingRef.current || !textareaRef.current) return;
            const textarea = textareaRef.current;
            const newWidth = e.clientX - textarea.getBoundingClientRect().left;
            const newHeight = e.clientY - textarea.getBoundingClientRect().top;
            textarea.style.width = `${newWidth}px`;
            textarea.style.height = `${newHeight}px`;
        };

        const stopResize = () => {
            isResizingRef.current = false;
        };

        window.addEventListener("mousemove",handleMouseMove);
        window.addEventListener("mouseup",stopResize);

        return () =>{
            window.removeEventListener("mousemove",handleMouseMove);
            window.removeEventListener("mouseup",stopResize);
        }
    },[])

    return(
       <div ref={wrapperRef} className={style.wrapper}>
             <textarea 
                ref={textareaRef}
                onChange={(e)=> setInputData(e.target.value)}
                onDoubleClick={()=> setEditTable(true)}
                readOnly={!editTable}
                onBlur={()=>setEditTable(false)}
                className={style.myTextarea}
                rows={1}
                value={inputData}
             />
             <div 
                className={style.resizeHandle}
                onMouseDown={(e)=>{
                    e.preventDefault();
                    isResizingRef.current = true;
                }}
             />
       </div> 
    );
};

export default Textarea