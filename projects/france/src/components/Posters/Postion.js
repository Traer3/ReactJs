import React, { useState } from "react";
import SummaryWindow from "../workspace/SummaryWindow";
import TerminalWindow from "../workspace/TerminalWindow";
import style from "../workspace/WindowStyle.module.css"
import ButtonBoxCheck from "../workspace/ButtonBoxCheck";

const Position = () => {
    const summaryPositions = "/summary/Position/SummaryPositions.txt"
    const positions =  "/summary/Position/Positions.txt"


    const summaryTextPositions = "/summary/Position/SummaryTextPositions.txt"
    const textPositions = "/summary/Position/TextPositions.txt"


    const summaryWH = "/summary/Position/SummaryWidthHeight.txt"
    const widthHeight = "/summary/Position/WidthHeight.txt"


    const [posterStates, setPosterStates] = useState({
        summaryPositions: true,
        positions: true,
        summaryTextPositions: true,
        textPositions: true,
        summaryWH: true,
        widthHeight: true,
       
    });

    return(
        <div>
             <div style={{
                display:'flex',
                justifyContent:'center',
                }}>
                <div className={style.columnSquare}>
                    <ButtonBoxCheck color={'red'} state={posterStates.summaryPositions} setState={setPosterStates} keyName={"summaryPositions"}/>
                    <ButtonBoxCheck color={'red'} state={posterStates.positions} setState={setPosterStates} keyName={"positions"}/>
                    
                </div>
                <div className={style.columnSquare}>
                    <ButtonBoxCheck color={'green'} state={posterStates.summaryTextPositions} setState={setPosterStates} keyName={"summaryTextPositions"}/>
                    <ButtonBoxCheck color={'green'} state={posterStates.textPositions} setState={setPosterStates} keyName={"textPositions"}/>
                    
                </div>
                <div className={style.columnSquare}>
                    <ButtonBoxCheck color={'blue'} state={posterStates.summaryWH} setState={setPosterStates} keyName={"summaryWH"}/>
                    <ButtonBoxCheck color={'blue'} state={posterStates.widthHeight} setState={setPosterStates} keyName={"widthHeight"}/>
                </div>
            </div>
            <div>
                <SummaryWindow 
                    style={style.redSummWindow}
                    customStyle={{
                        marginTop:'-90px',
                        marginLeft:'200px',
                    }} 
                    filePath={summaryPositions} 
                    showSummaryWindow={posterStates.summaryPositions} 
                    setShowSummaryWindow ={setPosterStates}
                    keyName={"summaryPositions"}
                />
                <TerminalWindow 
                    style={style.redTermWindow}
                    customStyle={{ 
                        marginTop:'35px',
                        marginLeft:'200px',
                    }} 
                    filePath={positions} 
                    showTerminalWindow={posterStates.positions} 
                    setShowTerminalWindow={setPosterStates}
                    keyName={"positions"}
                />

                <SummaryWindow 
                    style={style.greenSummWindow}
                    customStyle={{
                        marginTop:'-90px',
                        marginLeft:'600px',
                    }} 
                    filePath={summaryTextPositions} 
                    showSummaryWindow={posterStates.summaryTextPositions} 
                    setShowSummaryWindow ={setPosterStates}
                    keyName={"summaryTextPositions"}
                />
                <TerminalWindow 
                    style={style.greenTermWindow}
                    customStyle={{ 
                        marginTop:'-50px',
                        marginLeft:'600px',
                    }} 
                    filePath={textPositions} 
                    showTerminalWindow={posterStates.textPositions} 
                    setShowTerminalWindow={setPosterStates}
                    keyName={"textPositions"}
                />

                <SummaryWindow 
                    style={style.summaryWindow}
                    customStyle={{
                        marginTop:'-90px',
                        marginLeft:'980px',
                    }} 
                    filePath={summaryWH} 
                    showSummaryWindow={posterStates.summaryWH} 
                    setShowSummaryWindow ={setPosterStates}
                    keyName={"summaryWH"}
                />
                <TerminalWindow 
                    style={style.terminalWindow}
                    customStyle={{ 
                        marginTop:'20px',
                        marginLeft:'980px',
                    }} 
                    filePath={widthHeight} 
                    showTerminalWindow={posterStates.widthHeight} 
                    setShowTerminalWindow={setPosterStates}
                    keyName={"widthHeight"}
                />
            </div>
        </div>
    );
};

export default Position;