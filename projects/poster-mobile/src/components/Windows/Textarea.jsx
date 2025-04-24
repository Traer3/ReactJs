import React, { useEffect, useRef, useState } from "react";
import style from "./Textarea.module.css"

const Textarea = ({id, value, onChange}) => {
    const [editTable, setEditTable] = useState(false);
    const textareaRef = useRef(null);
    

    useEffect(()=>{
        if(textareaRef.current){
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    },[value]);
    
    
    return(
        <textarea 
            ref={textareaRef}
            onChange={(e)=> onChange(id, e.target.value)}
            onDoubleClick={()=> setEditTable(true)}
            readOnly={!editTable}
            onBlur={()=>setEditTable(false)}
            className={style.myTextarea}
            rows={1}
            
        />
    );
};

export default Textarea