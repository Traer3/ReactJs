import React, { useState } from "react";
import SummaryWindow from "../workspace/SummaryWindow";
import TerminalWindow from "../workspace/TerminalWindow";
import style from "../workspace/WindowStyle.module.css"
import ButtonBoxCheck from "../workspace/ButtonBoxCheck";


const ProblemsWithStyles = () => {
    const summary = "/summary/ProblemsWithStyles/Summary.txt"
    const menuPanel = "/summary/ProblemsWithStyles/MenuPanel.txt"
    const menuPanelStyles = "/summary/ProblemsWithStyles/MenuPanelStyles.txt"
    const [showSummary, setShowSummary] = useState(true);
    const [showMenuPanel, setShowMenuPanel] = useState(true);
    const [showMenuPanelStyles, setShowMenuPanelStyles] = useState(true);

    return(
       <div>
             <div style={{
                display:'flex',
                justifyContent:'center',
                }}>
                <div className={style.columnSquare}>
                    <ButtonBoxCheck color={'blue'} state={showSummary} setState={setShowSummary}/>
                    <ButtonBoxCheck color={'blue'} state={showMenuPanel} setState={setShowMenuPanel}/>
                    <ButtonBoxCheck color={'blue'} state={showMenuPanelStyles} setState={setShowMenuPanelStyles}/>
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
                    showSummaryWindow={showSummary} 
                    setShowSummaryWindow ={setShowSummary}
                />
                <TerminalWindow 
                    style={style.terminalWindow}
                    customStyle={{ 
                        marginTop:'50px',
                        marginLeft:'200px',
                    }} 
                    filePath={menuPanel} 
                    showTerminalWindow={showMenuPanel} 
                    setShowTerminalWindow={setShowMenuPanel}
                />
                <TerminalWindow 
                    style={style.terminalWindow}
                    customStyle={{ 
                        marginTop:'280px',
                        marginLeft:'200px',
                    }} 
                    filePath={menuPanelStyles} 
                    showTerminalWindow={showMenuPanelStyles} 
                    setShowTerminalWindow={setShowMenuPanelStyles}
                />
            </div>
       </div>
    );
};

export default ProblemsWithStyles;