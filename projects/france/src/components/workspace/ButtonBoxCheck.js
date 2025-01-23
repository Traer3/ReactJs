import React from "react";

const ButtonBoxCheck = ({color, state, setState}) =>{

    const inverState = (state , setState)=>{
        setState(!state)
    }

    return(
        <button 
                    onClick={()=>inverState(state, setState)}
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