import React, { useRef, useState } from "react";
import creature from "../abominations/alice-aris.gif"
import demands from "../abominations/aris-pum-paka-pam.mp3"
import SideButton from "../components/SidePanelComponents/SideButton";
import style from "../../src/components/SidePanels.module.css"
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
        <div >
            
            <div className={style.panelFlex}>
                <SideButton
                    newStyle="buttonsOnPanels"
                    onClick={deployment}
                >creature</SideButton>
            </div>

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