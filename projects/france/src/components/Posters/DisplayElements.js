import React from "react";
import SummaryWindow from "../workspace/SummaryWindow";
import TerminalWindow from "../workspace/TerminalWindow";

const ternaryMethod = "/summary/DisplayElements/TernaryMethod.txt"
const summaryTM = "/summary/DisplayElements/TM.txt"

const AND = "/summary/DisplayElements/AND.txt"
const logicANDSummary = "/summary/DisplayElements/LogicANDSummary.txt"

const DisplayElements = () => {
    return(
        <div>
            <SummaryWindow customStyle={{
                  marginTop:'-146px',
                  marginLeft:'200px',
            }} filePath={summaryTM}/>
            <TerminalWindow customStyle={{
                  marginTop:'-110px',
                  marginLeft:'200px',
            }} filePath={ternaryMethod}/>

            <SummaryWindow customStyle={{
                  marginTop:'-146px',
                  marginLeft:'700px',
                  border:'1px rgba(80,255,80,0.3)',
                  background:'rgba(80,255,80,0.2)',
                  boxShadow:'0 4px 10px rgba(80,255,80,0.2), 0 0 15px rgba(60,255,60,0.4)',
            }} filePath={logicANDSummary}/>
            <TerminalWindow customStyle={{
                  marginTop:'-110px',
                  marginLeft:'700px',
                  border:'2px solid rgba(80,255,80,0.3)',
            }} filePath={AND}/>


        </div>
    );
};

export default DisplayElements;