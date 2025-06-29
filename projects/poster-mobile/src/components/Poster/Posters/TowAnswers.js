import React from "react";
import TerminalWindow from "../../Windows/TerminalWindow";
import SummaryWindow from "../../Windows/SummaryWindow";
import style from "../../Windows/WindowStyle.module.css"
import ButtonBoxCheck from "../ButtonBoxCheck";

const logicAND = "/summary/TwoAnswers/LogicAND.txt"
const logicANDExample = "/summary/TwoAnswers/LogicANDExample.txt"

const logicANDCode = "/summary/TwoAnswers/LogicANDCode.txt"
const ternaryCode = "/summary/TwoAnswers/TernaryCode.txt"
const ternaryOperatorData = "/summary/TwoAnswers/TernaryOperator.txt"   

const TwoAnswers = ({posterStates, updatePosterState}) => {  
    
    const posterName = "TwoAnswers"

    const handleStateChange = (key) =>{
       const updatedState = {...posterStates, [key]: !posterStates[key]};
       updatePosterState(posterName, updatedState)
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

            <div >
                <SummaryWindow 
                    style={style.redSummWindow}
                    filePath={logicAND} 
                    showSummaryWindow={posterStates.logicAND} 
                    setShowSummaryWindow ={()=> handleStateChange("logicAND")}
                    keyName={"logicAND"}
                    getPosition={posterStates.positionLogicAND}
                    posterStates={posterStates}
                    updatePosterState={updatePosterState}
                    positionName={"positionLogicAND"}
                    posterName={posterName}
                />
                
                <TerminalWindow 
                    style={style.redTermWindow}
                    filePath={logicANDExample} 
                    showTerminalWindow={posterStates.logicANDExample} 
                    setShowTerminalWindow={()=> handleStateChange("logicANDExample")}
                    keyName={"logicANDExample"}
                    getPosition={posterStates.positionLogicANDExample}
                    posterStates={posterStates}
                    updatePosterState={updatePosterState}
                    positionName={"positionLogicANDExample"}
                    posterName={posterName}
                />

                <SummaryWindow 
                    style={style.greenSummWindow}
                    filePath={ternaryOperatorData} 
                    showSummaryWindow={posterStates.logicANDCode} 
                    setShowSummaryWindow ={()=> handleStateChange("logicANDCode")}
                    keyName={"logicANDCode"}
                    getPosition={posterStates.positionLogicANDCode}
                    posterStates={posterStates}
                    updatePosterState={updatePosterState}
                    positionName={"positionLogicANDCode"}
                    posterName={posterName}
                />
                <TerminalWindow 
                    style={style.greenTermWindow}
                    filePath={ternaryCode} 
                    showTerminalWindow={posterStates.ternaryCode} 
                    setShowTerminalWindow={()=> handleStateChange("ternaryCode")}
                    keyName={"ternaryCode"}
                    getPosition={posterStates.positionTernaryCode}
                    posterStates={posterStates}
                    updatePosterState={updatePosterState}
                    positionName={"positionTernaryCode"}
                    posterName={posterName}
                />
                <TerminalWindow  
                    style={style.greenTermWindow}
                    filePath={logicANDCode} 
                    showTerminalWindow={posterStates.ternaryOperatorData} 
                    setShowTerminalWindow={()=> handleStateChange("ternaryOperatorData")}
                    keyName={"ternaryOperatorData"}
                    getPosition={posterStates.positionTernaryOperatorData}
                    posterStates={posterStates}
                    updatePosterState={updatePosterState}
                    positionName={"positionTernaryOperatorData"}
                    posterName={posterName}
                />  
            </div>
    </div>
    );
};

export default TwoAnswers;