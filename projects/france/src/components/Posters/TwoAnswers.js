import React from "react";
import TerminalWindow from "../workspace/TerminalWindow";
import SummaryWindow from "../workspace/SummaryWindow";
import style from "../workspace/WindowStyle.module.css"
import ButtonBoxCheck from "../workspace/ButtonBoxCheck";

const logicAND = "/summary/TwoAnswers/LogicAND.txt"
const logicANDExample = "/summary/TwoAnswers/LogicANDExample.txt"

const logicANDCode = "/summary/TwoAnswers/LogicANDCode.txt"
const ternaryCode = "/summary/TwoAnswers/TernaryCode.txt"
const ternaryOperatorData = "/summary/TwoAnswers/TernaryOperator.txt"   

const TwoAnswers = ({posterStates, updatePosterState}) => {  
    


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
                        marginTop:'-90px',
                        marginLeft:'200px',
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

                <SummaryWindow 
                    style={style.greenSummWindow}
                    customStyle={{
                        marginTop:'-90px',
                        marginLeft:'800px', 
                    }} 
                    filePath={ternaryOperatorData} 
                    showSummaryWindow={posterStates.logicANDCode} 
                    setShowSummaryWindow ={()=> handleStateChange("logicANDCode")}
                    keyName={"logicANDCode"}
                />
                <TerminalWindow 
                    style={style.greenTermWindow}
                    customStyle={{
                        marginTop:'-10px',
                        marginLeft:'800px',
                    }} 
                    filePath={ternaryCode} 
                    showTerminalWindow={posterStates.ternaryCode} 
                    setShowTerminalWindow={()=> handleStateChange("ternaryCode")}
                    keyName={"ternaryCode"}
                />
                <TerminalWindow  
                    style={style.greenTermWindow}
                    customStyle={{
                        marginTop:'330px',
                        marginLeft:'800px',
                    }} 
                    filePath={logicANDCode} 
                    showTerminalWindow={posterStates.ternaryOperatorData} 
                    setShowTerminalWindow={()=> handleStateChange("ternaryOperatorData")}
                    keyName={"ternaryOperatorData"}
                />  
            </div>
    </div>
    );
};

export default TwoAnswers;