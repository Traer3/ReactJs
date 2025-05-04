import React from "react";

const BoxCheck = ({state, color, toggleWindow}) => {

    const getStyle = (color) => {
        switch(color){
            case "redSummWindow":
            case "redTermWindow":
                return "red";
            case "greenSummWindow":
            case "greenTermWindow":
                return "green"
            case "yellowSummWindow": 
            case "yellowTermWindow":
                return "yellow"
            case "summaryWindow":
            case"terminalWindow":
                return "blue"
            default: return "gray"
        }
    }
    const style = getStyle(color);

    return(
        <button 
            onClick={toggleWindow}
            style={{
                border:`0.2em solid ${style}`,
                padding:'0',
                backgroundColor: state ?  `${style}` : 'transparent' ,
                width:'max(0.1vw, 1vw)',
                height:'max(0.1vw, 1vw)',
                cursor:'pointer',
                margin:'0.1em',
        }}/>
    );
};

export default BoxCheck;