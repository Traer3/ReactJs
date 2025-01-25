import React, { useState } from "react";
import SummaryWindow from "../workspace/SummaryWindow";
import TerminalWindow from "../workspace/TerminalWindow";
import style from "../workspace/WindowStyle.module.css"
import ButtonBoxCheck from "../workspace/ButtonBoxCheck";
const DisplayElements = () => {
      const ternaryMethod = "/summary/DisplayElements/TernaryMethod.txt"
      const summaryTM = "/summary/DisplayElements/TM.txt"
      const [showTernaryMethod, setShowTernaryMethod] = useState(true);
      const [showSummaryTM, setShowSummaryTM] = useState(true);

      const AND = "/summary/DisplayElements/AND.txt"
      const logicANDSummary = "/summary/DisplayElements/LogicANDSummary.txt"
      const [showAND, setShowAND] = useState(true);
      const [showLogicANDSummary, setShowLogicANDSummary] = useState(true);

    return(
        <div>
            <div style={{
                display:'flex',
                justifyContent:'center',
                }}>
                <div className={style.columnSquare}>
                    <ButtonBoxCheck color={'red'} state={showTernaryMethod} setState={setShowTernaryMethod}/>
                    <ButtonBoxCheck color={'red'} state={showSummaryTM} setState={setShowSummaryTM}/>
                </div>
                <div className={style.columnSquare}>
                    <ButtonBoxCheck color={'green'} state={showLogicANDSummary} setState={setShowLogicANDSummary}/>
                    <ButtonBoxCheck color={'green'} state={showAND} setState={setShowAND}/>
                    
                </div>
            </div>

            <div>
                  <SummaryWindow 
                    style={style.redSummWindow}
                    customStyle={{
                        marginTop:'-90px',
                        marginLeft:'200px',
                    }} 
                    filePath={summaryTM} 
                    showSummaryWindow={showTernaryMethod} 
                    setShowSummaryWindow ={setShowTernaryMethod}
                />
                <TerminalWindow 
                    style={style.redTermWindow}
                    customStyle={{ 
                        marginTop:'-55px',
                        marginLeft:'200px',
                    }} 
                    filePath={ternaryMethod} 
                    showTerminalWindow={showSummaryTM} 
                    setShowTerminalWindow={setShowSummaryTM}
                />

                  <SummaryWindow 
                    style={style.greenSummWindow}
                    customStyle={{
                        marginTop:'-90px',
                        marginLeft:'700px',
                    }} 
                    filePath={logicANDSummary} 
                    showSummaryWindow={showLogicANDSummary} 
                    setShowSummaryWindow ={setShowLogicANDSummary}
                />
                <TerminalWindow 
                    style={style.greenSummWindow}
                    customStyle={{ 
                        marginTop:'-55px',
                        marginLeft:'700px',
                    }} 
                    filePath={AND} 
                    showTerminalWindow={showAND} 
                    setShowTerminalWindow={setShowAND}
                />
            </div>
        </div>
    );
};

export default DisplayElements;