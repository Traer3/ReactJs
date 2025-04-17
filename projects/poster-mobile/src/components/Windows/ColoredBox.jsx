import React from "react";

const ColoredBox = ({onClick,color}) =>{
    return(
        <button 
                onClick={onClick}
                style={{
                        border:`0.2em solid ${color}`,
                        padding:'0',
                        backgroundColor: `${color}` ,
                        width:'max(0.1vw, 1vw)',
                        height:'max(0.1vw, 1vw)',
                        cursor:'pointer',
                        margin:'0.1em',
                    }}/>
    );
};

export default ColoredBox;