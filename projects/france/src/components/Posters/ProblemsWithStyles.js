import React, { useState } from "react";
import SummaryWindow from "../workspace/SummaryWindow";
import TerminalWindow from "../workspace/TerminalWindow";
import style from "../workspace/WindowStyle.module.css"
import ButtonBoxCheck from "../workspace/ButtonBoxCheck";


const ProblemsWithStyles = () => {
    const summary = "/summary/ProblemsWithStyles/Summary.txt"
    const menuPanel = "/summary/ProblemsWithStyles/MenuPanel.txt"
    const menuPanelStyles = "/summary/ProblemsWithStyles/MenuPanelStyles.txt"


    const [posterStates, setPosterStates] = useState({
        summary: true,
        menuPanel: true,
        menuPanelStyles: true,
     
    })
    return(
       <div>
             <div style={{
                display:'flex',
                justifyContent:'center',
                }}>
                <div className={style.columnSquare}>
                    <ButtonBoxCheck color={'blue'} state={posterStates.summary} setState={setPosterStates} keyName={"summary"}/>
                    <ButtonBoxCheck color={'blue'} state={posterStates.menuPanel} setState={setPosterStates} keyName={"menuPanel"}/>
                    <ButtonBoxCheck color={'blue'} state={posterStates.menuPanelStyles} setState={setPosterStates} keyName={"menuPanelStyles"}/>
                </div>
            </div>
             <div>
                <SummaryWindow 
                    style={style.summaryWindow}
                    customStyle={{
                        marginTop:'-90px',
                        marginLeft:'200px',
                    }} 
                    filePath={summary} 
                    showSummaryWindow={posterStates.summary} 
                    setShowSummaryWindow ={setPosterStates}
                    keyName={"summary"}
                />
                <TerminalWindow 
                    style={style.terminalWindow}
                    customStyle={{ 
                        marginTop:'50px',
                        marginLeft:'200px',
                    }} 
                    filePath={menuPanel} 
                    showTerminalWindow={posterStates.menuPanel} 
                    setShowTerminalWindow={setPosterStates}
                    keyName={"menuPanel"}
                />
                <TerminalWindow 
                    style={style.terminalWindow}
                    customStyle={{ 
                        marginTop:'280px',
                        marginLeft:'200px',
                    }} 
                    filePath={menuPanelStyles} 
                    showTerminalWindow={posterStates.menuPanelStyles} 
                    setShowTerminalWindow={setPosterStates}
                    keyName={"menuPanelStyles"}
                />
            </div>
       </div>
    );
};

export default ProblemsWithStyles;