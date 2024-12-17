import React from "react";
import SummaryWindow from "../workspace/SummaryWindow";
import TerminalWindow from "../workspace/TerminalWindow";

const summary = "/summary/ProblemsWithStyles/Summary.txt"
const menuPanel = "/summary/ProblemsWithStyles/MenuPanel.txt"
const menuPanelStyles = "/summary/ProblemsWithStyles/MenuPanelStyles.txt"

const ProblemsWithStyles = () => {
    return(
        <div>
             <SummaryWindow customStyle={{
                marginTop:'-146px',
                marginLeft:'210px',
            }} filePath={summary}/>
            <TerminalWindow customStyle={{
                marginTop:'-0px',
                marginLeft:'210px',
            }} filePath={menuPanel}/>
            <TerminalWindow customStyle={{
                marginTop:'240px',
                marginLeft:'210px',
            }} filePath={menuPanelStyles}/>
        </div>
    );
};

export default ProblemsWithStyles;