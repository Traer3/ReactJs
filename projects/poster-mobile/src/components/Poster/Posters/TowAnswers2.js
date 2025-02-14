import React from "react";
import TerminalWindow from "../../Windows/TerminalWindow";
import SummaryWindow from "../../Windows/SummaryWindow";
import style from "../../Windows/WindowStyle.module.css"
import ButtonBoxCheck from "../ButtonBoxCheck";




const logicAND = "/summary/TwoAnswers/LogicAND.txt"
const logicANDExample = "/summary/TwoAnswers/LogicANDExample.txt"
  

const TwoAnswers2 = ({posterStates, updatePosterState}) => {  
    
    

    const handleStateChange = (key) =>{
       const updatedState = {...posterStates, [key]: !posterStates[key]};
       updatePosterState("TwoAnswers", updatedState)
    };
    
    
    
    return(
        <div>
            <div style={{
                display:'flex',
                justifyContent:'center',
                }}>
                   
                <div className={style.columnSquare}>
                    <ButtonBoxCheck color={'red'} state={posterStates.logicAND} setState={()=> handleStateChange("logicAND")} keyName={"logicAND"}/>
                    <ButtonBoxCheck color={'red'} state={posterStates.logicANDExample} setState={()=> handleStateChange("logicANDExample")} keyName={"logicANDExample"}/>
                </div>
                <div className={style.columnSquare}>
                    <ButtonBoxCheck color={'green'} state={posterStates.logicANDCode} setState={()=> handleStateChange("logicANDCode")} keyName={"logicANDCode"}/>
                    <ButtonBoxCheck color={'green'} state={posterStates.ternaryCode} setState={()=> handleStateChange("ternaryCode")} keyName={"ternaryCode"}/>
                    <ButtonBoxCheck color={'green'} state={posterStates.ternaryOperatorData} setState={()=> handleStateChange("ternaryOperatorData")} keyName={"ternaryOperatorData"}/>
                </div>
            </div>

          
                    <div>
                    <SummaryWindow 
                        style={style.redSummWindow}
                        customStyle={{
                        
                        }} 
                        filePath={logicAND} 
                        showSummaryWindow={posterStates.logicAND} 
                        setShowSummaryWindow ={()=> handleStateChange("logicAND")}
                        keyName={"logicAND"}
                    />
                    <TerminalWindow 
                        style={style.redTermWindow}
                        customStyle={{ 
                            marginTop:'10px',
                            marginLeft:'200px',
                        }} 
                        filePath={logicANDExample} 
                        showTerminalWindow={posterStates.logicANDExample} 
                        setShowTerminalWindow={()=> handleStateChange("logicANDExample")}
                        keyName={"logicANDExample"}
                    />
                    </div> 
    </div>
    );
};

export default TwoAnswers2;