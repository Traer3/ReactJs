import React, { useState } from "react";
import TerminalWindow from "../workspace/TerminalWindow";
import SummaryWindow from "../workspace/SummaryWindow";
import style from "../workspace/WindowStyle.module.css"
import ButtonBoxCheck from "../workspace/ButtonBoxCheck";

const TwoAnswers = () => {

   
    const logicAND = "/summary/TwoAnswers/LogicAND.txt"
    const logicANDExample = "/summary/TwoAnswers/LogicANDExample.txt"

    const logicANDCode = "/summary/TwoAnswers/LogicANDCode.txt"
    const ternaryCode = "/summary/TwoAnswers/TernaryCode.txt"
    const ternaryOperatorData = "/summary/TwoAnswers/TernaryOperator.txt"    



    const [posterStates, setPosterStates] = useState({
        logicAND: true,
        logicANDExample: true,
        logicANDCode: true,
        ternaryCode: true,
        ternaryOperatorData: true,
    })

    
    
    return(
        <div>
            <div style={{
                display:'flex',
                justifyContent:'center',
                }}>
                <div className={style.columnSquare}>
                    <ButtonBoxCheck color={'red'} state={posterStates.logicAND} setState={setPosterStates} keyName={"logicAND"}/>
                    <ButtonBoxCheck color={'red'} state={posterStates.logicANDExample} setState={setPosterStates} keyName={"logicANDExample"}/>
                </div>
                <div className={style.columnSquare}>
                    <ButtonBoxCheck color={'green'} state={posterStates.logicANDCode} setState={setPosterStates} keyName={"logicANDCode"}/>
                    <ButtonBoxCheck color={'green'} state={posterStates.ternaryCode} setState={setPosterStates} keyName={"ternaryCode"}/>
                    <ButtonBoxCheck color={'green'} state={posterStates.ternaryOperatorData} setState={setPosterStates} keyName={"ternaryOperatorData"}/>
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
                    setShowSummaryWindow ={setPosterStates}
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
                    setShowTerminalWindow={setPosterStates}
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
                    setShowSummaryWindow ={setPosterStates}
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
                    setShowTerminalWindow={setPosterStates}
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
                    setShowTerminalWindow={setPosterStates}
                    keyName={"ternaryOperatorData"}
                />  
            </div>
    </div>
    );
};

export default TwoAnswers;