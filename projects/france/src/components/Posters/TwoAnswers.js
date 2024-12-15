import React from "react";
import TerminalWindow from "../workspace/TerminalWindow";
import SummaryWindow from "../workspace/SummaryWindow";


const TwoAnswers = () => {

   
    const logicAND = "/summary/TwoAnswers/LogicAND.txt"
    const logicANDExample = "/summary/TwoAnswers/LogicANDExample.txt"
    const logicANDCode = "/summary/TwoAnswers/LogicANDCode.txt"
    const ternaryCode = "/summary/TwoAnswers/TernaryCode.txt"
    const ternaryOperatorData = "/summary/TwoAnswers/TernaryOperator.txt"           
    
    return(
        <div>
            <div style={{
                marginBotom:'',
                marginTop:"",
                bottom:"",
                border:'1px rgba(255,80,80,0.3)',
                background:'rgba(255,80,80,0.2)',
            }}>

            </div>
            <SummaryWindow customStyle={{
                marginTop:'-146px',
                marginLeft:'200px',
                
                border:'1px rgba(255,80,80,0.3)',
                background:'rgba(255,80,80,0.2)',
                boxShadow:'0 4px 10px rgba(250,80,80,0.2), 0 0 15px rgba(255,60,60,0.4)',
            }} filePath={logicAND}/>

            <TerminalWindow customStyle={{
                marginTop:'-50px',
                marginLeft:'200px',
                border:'2px solid rgba(255,80,80,0.3)',
            }} filePath={logicANDExample}/>

            <SummaryWindow customStyle={{
                marginTop:'-146px',
                marginLeft:'800px',
                border:'1px rgba(80,255,80,0.3)',
                background:'rgba(80,255,80,0.2)',
                boxShadow:'0 4px 10px rgba(80,255,80,0.2), 0 0 15px rgba(60,255,60,0.4)',
            }} filePath={ternaryOperatorData}/>

            <TerminalWindow customStyle={{
                marginTop:'-60px',
                marginLeft:'800px',
                border:'2px solid rgba(80,255,80,0.3)',
            }} filePath={ternaryCode}/>

            <TerminalWindow  customStyle={{
                marginTop:'280px',
                marginLeft:'800px',
                border:'2px solid rgba(80,255,80,0.3)',
            }} filePath={logicANDCode}/>
           
            
           
        </div>
    );
};

export default TwoAnswers;