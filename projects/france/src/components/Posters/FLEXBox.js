import React, { useState } from "react";
import SummaryWindow from "../workspace/SummaryWindow";
import TerminalWindow from "../workspace/TerminalWindow";
import style from "../workspace/WindowStyle.module.css"
import ButtonBoxCheck from "../workspace/ButtonBoxCheck";

const FLEXBox = () => {
    const summaryMDC = "/summary/FlexBox/SummaryMDC.txt"
    const mainDivContainer = "/summary/FlexBox/MainDivContainer.txt"
    
    const summaryDWB = "/summary/FlexBox/SummaryDWB.txt"
    const divWithBoxes = "/summary/FlexBox/DivWithBoxes.txt"
    
    const summaryB = "/summary/FlexBox/SummaryB.txt"
    const boxes = "/summary/FlexBox/Boxes.txt"
  
   
    const [posterStates, setPosterStates] = useState({
        summaryMDC: true,
        mainDivContainer: true,
        summaryDWB: true,
        divWithBoxes: true,
        summaryB: true,
        boxes: true,
    });

    return(
        <div>
            <div style={{
                display:'flex',
                justifyContent:'center',
                }}>
                <div className={style.columnSquare}>
                    <ButtonBoxCheck color={'red'} state={posterStates.summaryMDC} setState={setPosterStates} keyName={"summaryMDC"}/>
                    <ButtonBoxCheck color={'red'} state={posterStates.mainDivContainer} setState={setPosterStates} keyName={"mainDivContainer"}/>
                    
                </div>
                <div className={style.columnSquare}>
                    <ButtonBoxCheck color={'green'} state={posterStates.summaryDWB} setState={setPosterStates} keyName={"summaryDWB"}/>
                    <ButtonBoxCheck color={'green'} state={posterStates.divWithBoxes} setState={setPosterStates} keyName={"divWithBoxes"}/>
                    
                </div>
                <div className={style.columnSquare}>
                    <ButtonBoxCheck color={'blue'} state={posterStates.summaryB} setState={setPosterStates} keyName={"summaryB"}/>
                    <ButtonBoxCheck color={'blue'} state={posterStates.boxes} setState={setPosterStates} keyName={"boxes"}/>
                </div>
            </div>
            <div>
                <SummaryWindow 
                    style={style.redSummWindow}
                    customStyle={{
                        marginTop:'-90px',
                        marginLeft:'200px',
                    }} 
                    filePath={summaryMDC} 
                    showSummaryWindow={posterStates.summaryMDC} 
                    setShowSummaryWindow ={setPosterStates}
                    keyName={"summaryMDC"}
                />
                <TerminalWindow 
                    style={style.redTermWindow}
                    customStyle={{ 
                        marginTop:'-45px',
                        marginLeft:'200px',
                    }} 
                    filePath={mainDivContainer} 
                    showTerminalWindow={posterStates.mainDivContainer} 
                    setShowTerminalWindow={setPosterStates}
                    keyName={"mainDivContainer"}
                />

                <SummaryWindow 
                    style={style.greenSummWindow}
                    customStyle={{
                        marginTop:'-90px',
                        marginLeft:'580px',
                    }} 
                    filePath={summaryDWB} 
                    showSummaryWindow={posterStates.summaryDWB} 
                    setShowSummaryWindow ={setPosterStates}
                    keyName={"summaryDWB"}
                />
                <TerminalWindow 
                    style={style.greenSummWindow}
                    customStyle={{ 
                        marginTop:'120px',
                        marginLeft:'580px',
                    }} 
                    filePath={divWithBoxes} 
                    showTerminalWindow={posterStates.divWithBoxes} 
                    setShowTerminalWindow={setPosterStates}
                    keyName={"divWithBoxes"}
                />

                <SummaryWindow 
                    style={style.summaryWindow}
                    customStyle={{
                        marginTop:'-90px',
                        marginLeft:'980px',
                    }} 
                    filePath={summaryB} 
                    showSummaryWindow={posterStates.summaryB} 
                    setShowSummaryWindow ={setPosterStates}
                    keyName={"summaryB"}
                />
                <TerminalWindow 
                    style={style.terminalWindow}
                    customStyle={{ 
                        marginTop:'-45px',
                        marginLeft:'980px',
                    }} 
                    filePath={boxes} 
                    showTerminalWindow={posterStates.boxes} 
                    setShowTerminalWindow={setPosterStates}
                    keyName={"boxes"}
                />
            </div>
        </div>
    );
};

export default FLEXBox;