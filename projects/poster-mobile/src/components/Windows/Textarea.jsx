import React, { useEffect, useRef, useState } from "react";

const Textarea = ({unFrezz}) => {
    const [inputData, setInputData] = useState("");
    const textareaRef = useRef(null);
    const [editTable, setEditTable] = useState(false);
    useEffect(()=>{
        if(textareaRef.current){
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    },[inputData]);
    

    //  onMouseEnter={() => setHovered(true)}
    // onMouseLeave={() => setHovered(false)}
    return(
        <textarea 
                ref={textareaRef}
                onChange={(e)=> setInputData(e.target.value)}
                onDoubleClick={()=> setEditTable(true)}
                readOnly={!editTable}
                onBlur={()=>setEditTable(false)}
                style={{
                        border:'none',
                        outline:'none',
                        borderRadius:'0.4em',
                        backgroundColor:'transparent',
                        width:'100%',
                        resize:'both',
                        padding:'0',
                        fontSize:'inherit',
                        color:'inherit',
                        overflow:'hidden',
                        pointerEvents: unFrezz ? 'auto' : 'none',
                      }}
                        rows={1}
                        value={inputData}
        />  
    );
};

export default Textarea