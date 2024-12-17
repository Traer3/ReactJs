import React from "react";
import TerminalWindow from "../workspace/TerminalWindow";
import SummaryWindow from "../workspace/SummaryWindow";

const summaryPositions = "/summary/Position/SummaryPositions.txt"
const positions =  "/summary/Position/Positions.txt"

const summaryTextPositions = "/summary/Position/SummaryTextPositions.txt"
const textPositions = "/summary/Position/TextPositions.txt"

const summaryWH = "/summary/Position/SummaryWidthHeight.txt"
const widthHeight = "/summary/Position/WidthHeight.txt"




const Position = () => {
    return(
        <div>
            <SummaryWindow customStyle={{
                marginTop:'-146px',
                marginLeft:'210px',
                
                border:'1px rgba(255,80,80,0.3)',
                background:'rgba(255,80,80,0.2)',
                boxShadow:'0 4px 10px rgba(250,80,80,0.2), 0 0 15px rgba(255,60,60,0.4)',
            }} filePath={summaryPositions}/>
            <TerminalWindow customStyle={{
                marginTop:'-15px',
                marginLeft:'210px',
                border:'2px solid rgba(255,80,80,0.3)',
            }} filePath={positions}/>

            <SummaryWindow customStyle={{
                marginTop:'-146px',
                marginLeft:'600px',
                border:'1px rgba(80,255,80,0.3)',
                background:'rgba(80,255,80,0.2)',
                boxShadow:'0 4px 10px rgba(80,255,80,0.2), 0 0 15px rgba(60,255,60,0.4)',
            }} filePath={summaryTextPositions}/>
            <TerminalWindow customStyle={{
                marginTop:'-95px',
                marginLeft:'600px',
                border:'2px solid rgba(80,255,80,0.3)',
            }} filePath={textPositions}/>

            <SummaryWindow customStyle={{
                marginTop:'-146px',
                marginLeft:'980px',
            }} filePath={summaryWH}/>
            <TerminalWindow customStyle={{
                marginTop:'-30px',
                marginLeft:'980px',
            }} filePath={widthHeight}/>
            
        </div>
    );
};

export default Position;