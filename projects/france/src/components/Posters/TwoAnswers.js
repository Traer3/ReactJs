import React, { useState } from "react";
import TerminalWindow from "../workspace/TerminalWindow";
import SummaryWindow from "../workspace/SummaryWindow";
import style from "../workspace/WindowStyle.module.css"
import ButtonBoxCheck from "../workspace/ButtonBoxCheck";

const TwoAnswers = () => {

   
    const logicAND = "/summary/TwoAnswers/LogicAND.txt"
    const logicANDExample = "/summary/TwoAnswers/LogicANDExample.txt"
    const [showLogicAND, setShowLogincAND] = useState(true);
    const [showLogicANDExample, setShowLogicANDExample] = useState(true);

    const logicANDCode = "/summary/TwoAnswers/LogicANDCode.txt"
    const ternaryCode = "/summary/TwoAnswers/TernaryCode.txt"
    const ternaryOperatorData = "/summary/TwoAnswers/TernaryOperator.txt"    
    const [showLogicANDCode, setShowLogicANDCode] = useState(true);
    const [showTernaryCode, setShowTernaryCode] = useState(true);
    const [showTernaryOperatorData, setShowTernaryOperatorData] = useState(true);

    
    return(
        <div>
            <div style={{
                display:'flex',
                justifyContent:'center',
                }}>
                <div className={style.columnSquare}>
                    <ButtonBoxCheck color={'red'} state={showLogicAND} setState={setShowLogincAND}/>
                    <ButtonBoxCheck color={'red'} state={showLogicANDExample} setState={setShowLogicANDExample}/>
                </div>
                <div className={style.columnSquare}>
                    <ButtonBoxCheck color={'green'} state={showLogicANDCode} setState={setShowLogicANDCode}/>
                    <ButtonBoxCheck color={'green'} state={showTernaryCode} setState={setShowTernaryCode}/>
                    <ButtonBoxCheck color={'green'} state={showTernaryOperatorData} setState={setShowTernaryOperatorData}/>
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
                    showSummaryWindow={showLogicAND} 
                    setShowSummaryWindow ={setShowLogincAND}
                />
                <TerminalWindow 
                    style={style.redTermWindow}
                    customStyle={{ 
                        marginTop:'10px',
                        marginLeft:'200px',
                    }} 
                    filePath={logicANDExample} 
                    showTerminalWindow={showLogicANDExample} 
                    setShowTerminalWindow={setShowLogicANDExample}
                />

                <SummaryWindow 
                    style={style.greenSummWindow}
                    customStyle={{
                        marginTop:'-90px',
                        marginLeft:'800px', 
                    }} 
                    filePath={ternaryOperatorData} 
                    showSummaryWindow={showLogicANDCode} 
                    setShowSummaryWindow={setShowLogicANDCode}
                />
                <TerminalWindow 
                    style={style.greenTermWindow}
                    customStyle={{
                        marginTop:'-10px',
                        marginLeft:'800px',
                    }} 
                    filePath={ternaryCode} 
                    showTerminalWindow={showTernaryCode} 
                    setShowTerminalWindow={setShowTernaryCode}
                />
                <TerminalWindow  
                    style={style.greenTermWindow}
                    customStyle={{
                        marginTop:'330px',
                        marginLeft:'800px',
                    }} 
                    filePath={logicANDCode} 
                    showTerminalWindow={showTernaryOperatorData} 
                    setShowTerminalWindow={setShowTernaryOperatorData}
                />  
            </div>
    </div>
    );
};

export default TwoAnswers;