import React, { useEffect, useState } from "react";

const ImitationTerminal = ({incomingText}) =>{

    const [name, setName] = useState('');
    const [isDeleting, setIsDeleting] =  useState(false);
    const typingSpeed = 200;


    useEffect(()=>{
        let typingInterval;

        if (isDeleting){
            typingInterval = setInterval(()=> {
                setName((prev) => incomingText.slice(0, prev.length -1));
                if (name === ''){
                    setIsDeleting(false);
                }
            }, typingSpeed);
        }else {
            typingInterval = setInterval (()=>{
                setName((prev) => incomingText.slice(0, prev.length + 1));
                if(name === incomingText){
                    setTimeout (()=> setIsDeleting(true), 1000);
                }
            },typingSpeed);
        }
        return ()=> clearInterval(typingInterval);
    },[name, isDeleting, incomingText]);

    const style = `
    .blinking-cursor{
        font-weight: bold;
        font-size: 20px;
        color: #2d7ad6;
        animation: blink 1s step-start infinite;
    }
        @keyframes blink {
            50% {opacity: 0;}
        }
    `;
    return (
        <>
            <style>{style}</style>
            <div style={{
                fontFamily: 'monospace',
                fontSize: '20px',
                whiteSpace: 'pre',
            }}>
                <span className="blinking-cursor">:</span>
                {name}
            </div>
        </>
    )
}

export default ImitationTerminal;