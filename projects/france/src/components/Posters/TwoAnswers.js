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
            <TerminalWindow filePath={ternaryCode}/>
            <SummaryWindow filePath={ternaryOperatorData}/>
            <SummaryWindow filePath={logicAND}/>
            <TerminalWindow filePath={logicANDExample}/>
            <TerminalWindow filePath={logicANDCode}/>
        </div>
    );
};

export default TwoAnswers;