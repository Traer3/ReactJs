import React, { useState } from "react";
import creature from "../abominations/alice-aris.gif"
import style from "./css/MenuScreen.module.css"

const Creatura = () => {
    const [cratureState, setCreatureState] = useState(false);

    const deployment = ()=>{
        setCreatureState(!cratureState);
    }

    return(
        <div>
            <button 
                className={style.creatureButton}
                onClick={deployment}> deploy the creature
                 
                
            </button>
            {cratureState &&(
                 <img 
                    src={creature}
                    alt="creature"
                    style={{
                        position:"absolute",
                        transform: "translateX(600%) translateY(100%)",
                        
                    }}
                />
            )}
            
        </div>
    );
};

export default Creatura;