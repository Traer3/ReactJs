import React from "react";
import SummaryWindow from "../workspace/SummaryWindow";
import TerminalWindow from "../workspace/TerminalWindow";

const mainDivContainer = "/summary/FlexBox/MainDivContainer.txt"
const summaryMDC = "/summary/FlexBox/SummaryMDC.txt"

const divWithBoxes = "/summary/FlexBox/DivWithBoxes.txt"
const summartDWB = "/summary/FlexBox/SummartDWB.txt"

const boxes = "/summary/FlexBox/Boxes.txt"
const summaryB = "/summary/FlexBox/SummaryB.txt"



const FLEXBox = () => {
    return(
        <div>
            <SummaryWindow customStyle={{
                marginTop:'-146px',
                marginLeft:'210px',
                
                border:'1px rgba(255,80,80,0.3)',
                background:'rgba(255,80,80,0.2)',
                boxShadow:'0 4px 10px rgba(250,80,80,0.2), 0 0 15px rgba(255,60,60,0.4)',
            }} filePath={summaryMDC}/>

            <TerminalWindow customStyle={{
                marginTop:'-90px',
                marginLeft:'210px',
                border:'2px solid rgba(255,80,80,0.3)',
            }} filePath={mainDivContainer}/>

            <SummaryWindow customStyle={{
                marginTop:'-146px',
                marginLeft:'600px',
                border:'1px rgba(80,255,80,0.3)',
                background:'rgba(80,255,80,0.2)',
                boxShadow:'0 4px 10px rgba(80,255,80,0.2), 0 0 15px rgba(60,255,60,0.4)',
            }} filePath={summartDWB}/>

            <TerminalWindow customStyle={{
                marginTop:'130px',
                marginLeft:'600px',
                border:'2px solid rgba(80,255,80,0.3)',
            }} filePath={divWithBoxes}/>

            <SummaryWindow customStyle={{
                marginTop:'-146px',
                marginLeft:'980px',
            }} filePath={summaryB}/>
            <TerminalWindow customStyle={{
                marginTop:'-95px',
                marginLeft:'980px',
            }} filePath={boxes}/>

        </div>
    );
};

export default FLEXBox;