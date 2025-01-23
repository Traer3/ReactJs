import React, { useRef, useState } from "react";
import creature from "../abominations/alice-aris.gif"
import style from "../components/css/MenuScreen.module.css"
import demands from "../abominations/aris-pum-paka-pam.mp3"
const Creatura = ({customStyle}) => {
    const [cratureState, setCreatureState] = useState(false);

    const deployment = ()=>{
        setCreatureState(!cratureState);
        theyCanSpeek()
    }

    const voices = useRef(null);

    const theyCanSpeek = () => {
        if(voices.current){
            voices.current.play();
        }
    }

    return(
        <div>
            <button 
                className={style.buttonsOnMenu}
                onClick={deployment}
                > deploy the creature
                 
                
            </button>
            <audio ref={voices} src={demands}/>

            {cratureState &&(
                 <img 
                    src={creature}
                    alt="creature"
                    style={{
                        position:"absolute",
                        ...customStyle,
                        
                    }}
                />
            )}
            
          
            
        </div>
    );
};

export default Creatura;