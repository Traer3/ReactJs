import React from "react";
import TerminalWindow from "./TerminalWindow";
import SummaryWindow from "./SummaryWindow";

const summaryPath = "/summary/SummaryTesting.txt"
const moreSummary = "/summary/kys.txt"

const WorkSpace = () => {
    return(
        <div>
            <TerminalWindow/>
            <SummaryWindow  filePath={summaryPath}/>
            <SummaryWindow filePath={moreSummary}/>

            
         
            
        </div>
    );
};

export default WorkSpace;