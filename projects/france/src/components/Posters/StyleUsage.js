import React from "react";
import SummaryWindow from "../workspace/SummaryWindow";
import TerminalWindow from "../workspace/TerminalWindow";


const summaryIS = "/summary/StyleUsage/SummaryIS.txt"
const inlineStyles = "/summary/StyleUsage/InlineStyles.txt"

const summaryCSSInJS = "/summary/StyleUsage/SummaryCSSinJS.txt"
const cssInJS = "/summary/StyleUsage/CSSinJS.txt"

const summaryCSSModules = "/summary/StyleUsage/SummaryCSSmodules.txt"
const cssModules = "/summary/StyleUsage/CSSmodules.txt"
const cssModulesUsage = "/summary/StyleUsage/CSSmodulesUsage.txt"

const summarySF = "/summary/StyleUsage/SummarySF.txt"
const separateFile = "/summary/StyleUsage/SeparateFile.txt"
const separateFileUsage = "/summary/StyleUsage/SeparateFileUsage.txt"




const StyleUsage = () => {
    return(
        <div>
            <SummaryWindow customStyle={{
                marginTop:'-146px',
                marginLeft:'210px',
                
                border:'1px rgba(255,80,80,0.3)',
                background:'rgba(255,80,80,0.2)',
                boxShadow:'0 4px 10px rgba(250,80,80,0.2), 0 0 15px rgba(255,60,60,0.4)',
            }} filePath={summaryIS}/>
            <TerminalWindow customStyle={{
                marginTop:'-90px',
                marginLeft:'210px',
                border:'2px solid rgba(255,80,80,0.3)',
            }} filePath={inlineStyles}/>

            <SummaryWindow customStyle={{
                marginTop:'-146px',
                marginLeft:'600px',
                border:'1px rgba(80,255,80,0.3)',
                background:'rgba(80,255,80,0.2)',
                boxShadow:'0 4px 10px rgba(80,255,80,0.2), 0 0 15px rgba(60,255,60,0.4)',
            }} filePath={summaryCSSInJS}/>
            <TerminalWindow customStyle={{
                marginTop:'-30px',
                marginLeft:'600px',
                border:'2px solid rgba(80,255,80,0.3)',
            }} filePath={cssInJS}/>

            <SummaryWindow customStyle={{
                marginTop:'-146px',
                marginLeft:'1030px',
            }} filePath={summaryCSSModules}/>
            <TerminalWindow customStyle={{
                marginTop:'-100px',
                marginLeft:'1030px',
            }} filePath={cssModules}/>
            <TerminalWindow customStyle={{
                marginTop:'50px',
                marginLeft:'1030px',
            }} filePath={cssModulesUsage}/>

            <SummaryWindow customStyle={{
                marginTop:'-146px',
                marginLeft:'1410px',
                border:'1px rgba(255,223,80,0.3)',
                background:'rgba(255,223,80,0.2)',
                boxShadow:'0 4px 10px rgba(255,223,80,0.2), 0 0 15px rgba(255,213,60,0.4)',
            }} filePath={summarySF}/>
            <TerminalWindow customStyle={{
                marginTop:'-100px',
                marginLeft:'1410px',
                border:'2px solid rgba(255,223,80,0.3)',
            }} filePath={separateFile}/>
            <TerminalWindow customStyle={{
                marginTop:'150px',
                marginLeft:'1410px',
                border:'2px solid rgba(255,223,80,0.3)',
            }} filePath={separateFileUsage}/>


        </div>
    );
};

export default StyleUsage;