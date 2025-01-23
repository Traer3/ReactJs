import React, { useState } from "react";
import TerminalWindow from "../workspace/TerminalWindow";
import SummaryWindow from "../workspace/SummaryWindow";
import style from "../css/MenuScreen.module.css"
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
                <div className={style.checkMenu}>
                    <ButtonBoxCheck color={'red'} state={showLogicAND} setState={setShowLogincAND}/>
                    <ButtonBoxCheck color={'red'} state={showLogicANDExample} setState={setShowLogicANDExample}/>
                </div>
                <div className={style.checkMenu}>
                    <ButtonBoxCheck color={'green'} state={showLogicANDCode} setState={setShowLogicANDCode}/>
                    <ButtonBoxCheck color={'green'} state={showTernaryCode} setState={setShowTernaryCode}/>
                    <ButtonBoxCheck color={'green'} state={showTernaryOperatorData} setState={setShowTernaryOperatorData}/>
                </div>
            </div>

            <div>
            <SummaryWindow 
                customStyle={{
                    marginTop:'-146px',
                    marginLeft:'200px',
                    
                    border:'1px rgba(255,80,80,0.3)',
                    background:'rgba(255,80,80,0.2)',
                    boxShadow:'0 4px 10px rgba(250,80,80,0.2), 0 0 15px rgba(255,60,60,0.4)',
                }} 
                filePath={logicAND} 
                showSummaryWindow={showLogicAND} 
                setShowSummaryWindow ={setShowLogincAND}
            />
            <TerminalWindow 
                customStyle={{ 
                    marginTop:'-30px',
                    marginLeft:'200px',
                    border:'2px solid rgba(255,80,80,0.3)',
                }} 
                filePath={logicANDExample} 
                showTerminalWindow={showLogicANDExample} 
                setShowTerminalWindow={setShowLogicANDExample}
            />

            <SummaryWindow 
                customStyle={{
                    marginTop:'-146px',
                    marginLeft:'800px',
                    border:'1px rgba(80,255,80,0.3)',
                    background:'rgba(80,255,80,0.2)',
                    boxShadow:'0 4px 10px rgba(80,255,80,0.2), 0 0 15px rgba(60,255,60,0.4)',
                }} 
                filePath={ternaryOperatorData} 
                showSummaryWindow={showLogicANDCode} 
                setShowSummaryWindow={setShowLogicANDCode}
            />
            <TerminalWindow 
                customStyle={{
                    marginTop:'-50px',
                    marginLeft:'800px',
                    border:'2px solid rgba(80,255,80,0.3)',
                }} 
                filePath={ternaryCode} 
                showTerminalWindow={showTernaryCode} 
                setShowTerminalWindow={setShowTernaryCode}
            />
            <TerminalWindow  
                customStyle={{
                    marginTop:'290px',
                    marginLeft:'800px',
                    border:'2px solid rgba(80,255,80,0.3)',
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