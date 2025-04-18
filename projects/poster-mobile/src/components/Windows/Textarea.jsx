import React, { useEffect, useRef, useState } from "react";

const Textarea = () => {
    const [inputData, setInputData] = useState(null);
    const textareaRef = useRef(null);
    useEffect(()=>{
        if(textareaRef.current){
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    },[inputData]);

    return(
        <textarea 
                ref={textareaRef}
                onChange={(e)=> setInputData(e.target.value)}
                style={{
                        border:'none',
                        outline:'none',
                        borderRadius:'0.4em',
                        backgroundColor:'transparent',
                        width:'100%',
                        resize:'none',
                        padding:'0',
                        fontSize:'inherit',
                        color:'inherit',
                        overflow:'hidden'
                      }}
                        rows={1}
                        value={inputData}
        />  
    );
};

export default Textarea