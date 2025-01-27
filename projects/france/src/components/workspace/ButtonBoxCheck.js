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
                        border:`2px solid ${color}`,
                        backgroundColor: state ?  `${color}` : 'transparent' ,
                        
                        width:'15px',
                        height:'15px',
                        cursor:'pointer',
                        margin:'1px',
                }}/>
    );
};

export default ButtonBoxCheck;