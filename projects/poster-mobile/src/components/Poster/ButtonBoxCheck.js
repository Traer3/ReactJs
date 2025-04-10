import React from "react";

const ButtonBoxCheck = ({color, state, setState, keyName}) =>{ 

    const inverState = ()=>{
        setState((prevStates)=>({
            ...prevStates,
            [keyName] : !prevStates[keyName],
        }));
    };
  
    return(
        <button 
                    onClick={inverState}
                    style={{
                        border:`0.2em solid ${color}`,
                        padding:'0',
                        backgroundColor: state ?  `${color}` : 'transparent' ,
                        
                        width:'max(0.1vw, 1vw)',
                        height:'max(0.1vw, 1vw)',
                       
                        cursor:'pointer',
                        margin:'0.1em',
                }}/>
    );
};

export default ButtonBoxCheck;