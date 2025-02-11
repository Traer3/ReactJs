import React from "react";
import style from "../Windows/WindowStyle.module.css"

import SummaryWindow from "../Windows/SummaryWindow";
import TerminalWindow from "../Windows/TerminalWindow";


const logicAND = "/summary/TwoAnswers/LogicAND.txt"
const logicANDExample = "/summary/TwoAnswers/LogicANDExample.txt"

const PosterInterface = ({posterStates, updatePosterState}) => {
    
    
    const handleStateChange = (key) =>{
        const updatedState = {...posterStates, [key]: !posterStates[key]};
        updatePosterState("TwoAnswers", updatedState)
     };

console.log(posterStates)

    return(
        <div>
            <SummaryWindow 
                    style={style.redSummWindow}
                   
                    filePath={logicAND} 
                    showSummaryWindow={posterStates.logicAND}    //другой posterStates           
                    setShowSummaryWindow ={()=> handleStateChange("logicAND")}  
                    keyName={"logicAND"}                                        
                />
                <TerminalWindow 
                    style={style.redTermWindow}
                    
                    filePath={logicANDExample} 
                    showTerminalWindow={posterStates.logicANDExample} //другой posterStates   
                    setShowTerminalWindow={()=> handleStateChange("logicANDExample")}
                    keyName={"logicANDExample"}
                />
        </div>
    );
};

export default PosterInterface;