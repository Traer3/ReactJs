import React from "react";
import TerminalWindow from "../../Windows/TerminalWindow";
import SummaryWindow from "../../Windows/SummaryWindow";
import style from "../../Windows/WindowStyle.module.css"
import ButtonBoxCheck from "../ButtonBoxCheck";

const summary = "/summary/ProblemsWithStyles/Summary.txt"
const menuPanel = "/summary/ProblemsWithStyles/MenuPanel.txt"
const menuPanelStyles = "/summary/ProblemsWithStyles/MenuPanelStyles.txt"


const ProblemsWithStyles = ({posterStates, updatePosterState}) => {
 
    const handleStateChange = (key) =>{
        const updatedState = {...posterStates, [key]: !posterStates[key]};
        updatePosterState("ProblemsWithStyles", updatedState)
     };
   
    return(
       <div>
             <div style={{
                display:'flex',
                justifyContent:'center',
                }}>
                <div className={style.columnSquare}>
                    <ButtonBoxCheck color={'blue'} state={posterStates.summary} setState={()=> handleStateChange("summary")} keyName={"summary"}/>
                    <ButtonBoxCheck color={'blue'} state={posterStates.menuPanel} setState={()=> handleStateChange("menuPanel")} keyName={"menuPanel"}/>
                    <ButtonBoxCheck color={'blue'} state={posterStates.menuPanelStyles} setState={()=> handleStateChange("menuPanelStyles")} keyName={"menuPanelStyles"}/>
                </div>
            </div>
             <div>
                <SummaryWindow 
                    style={style.summaryWindow}
                    filePath={summary} 
                    showSummaryWindow={posterStates.summary} 
                    setShowSummaryWindow ={()=> handleStateChange("summary")}
                    keyName={"summary"}
                    getPosition={posterStates.positionSummary}
                />
                <TerminalWindow 
                    style={style.terminalWindow}
                    filePath={menuPanel} 
                    showTerminalWindow={posterStates.menuPanel} 
                    setShowTerminalWindow={()=> handleStateChange("menuPanel")}
                    keyName={"menuPanel"}
                    getPosition={posterStates.positionMenuPanel}
                />
                <TerminalWindow 
                    style={style.terminalWindow}
                    filePath={menuPanelStyles} 
                    showTerminalWindow={posterStates.menuPanelStyles} 
                    setShowTerminalWindow={()=> handleStateChange("menuPanelStyles")}
                    keyName={"menuPanelStyles"}
                    getPosition={posterStates.positionMenuPanelStyles}
                />
            </div>
       </div>
    );
};

export default ProblemsWithStyles;