import React, { useState } from "react";
import SummaryWindow from "../workspace/SummaryWindow";
import TerminalWindow from "../workspace/TerminalWindow";
import style from "../workspace/WindowStyle.module.css"
import ButtonBoxCheck from "../workspace/ButtonBoxCheck";

const Position = () => {
    const summaryPositions = "/summary/Position/SummaryPositions.txt"
    const positions =  "/summary/Position/Positions.txt"
    const [showSummaryPositions, setShowSummaryPositions] = useState(true);
    const [showPositions, setShowPositions] = useState(true);

    const summaryTextPositions = "/summary/Position/SummaryTextPositions.txt"
    const textPositions = "/summary/Position/TextPositions.txt"
    const [showSummaryTextPositions, setShowSummaryTextPositions] = useState(true);
    const [showTextPositions, setShowTextPositions] = useState(true);

    const summaryWH = "/summary/Position/SummaryWidthHeight.txt"
    const widthHeight = "/summary/Position/WidthHeight.txt"
    const [showSummaryWH, setShowSummaryWH] = useState(true);
    const [showWidthHeight, setShowWidthHeight] = useState(true);

    return(
        <div>
             <div style={{
                display:'flex',
                justifyContent:'center',
                }}>
                <div className={style.columnSquare}>
                    <ButtonBoxCheck color={'red'} state={showSummaryPositions} setState={setShowSummaryPositions}/>
                    <ButtonBoxCheck color={'red'} state={showPositions} setState={setShowPositions}/>
                    
                </div>
                <div className={style.columnSquare}>
                    <ButtonBoxCheck color={'green'} state={showSummaryTextPositions} setState={setShowSummaryTextPositions}/>
                    <ButtonBoxCheck color={'green'} state={showTextPositions} setState={setShowTextPositions}/>
                    
                </div>
                <div className={style.columnSquare}>
                    <ButtonBoxCheck color={'blue'} state={showSummaryWH} setState={setShowSummaryWH}/>
                    <ButtonBoxCheck color={'blue'} state={showWidthHeight} setState={setShowWidthHeight}/>
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
                    showSummaryWindow={showSummaryPositions} 
                    setShowSummaryWindow ={setShowSummaryPositions}
                />
                <TerminalWindow 
                    style={style.redTermWindow}
                    customStyle={{ 
                        marginTop:'35px',
                        marginLeft:'200px',
                    }} 
                    filePath={positions} 
                    showTerminalWindow={showPositions} 
                    setShowTerminalWindow={setShowPositions}
                />

                <SummaryWindow 
                    style={style.greenSummWindow}
                    customStyle={{
                        marginTop:'-90px',
                        marginLeft:'600px',
                    }} 
                    filePath={summaryTextPositions} 
                    showSummaryWindow={showSummaryTextPositions} 
                    setShowSummaryWindow ={setShowSummaryTextPositions}
                />
                <TerminalWindow 
                    style={style.greenTermWindow}
                    customStyle={{ 
                        marginTop:'-50px',
                        marginLeft:'600px',
                    }} 
                    filePath={textPositions} 
                    showTerminalWindow={showTextPositions} 
                    setShowTerminalWindow={setShowTextPositions}
                />

                <SummaryWindow 
                    style={style.summaryWindow}
                    customStyle={{
                        marginTop:'-90px',
                        marginLeft:'980px',
                    }} 
                    filePath={summaryWH} 
                    showSummaryWindow={showSummaryWH} 
                    setShowSummaryWindow ={setShowSummaryWH}
                />
                <TerminalWindow 
                    style={style.terminalWindow}
                    customStyle={{ 
                        marginTop:'20px',
                        marginLeft:'980px',
                    }} 
                    filePath={widthHeight} 
                    showTerminalWindow={showWidthHeight} 
                    setShowTerminalWindow={setShowWidthHeight}
                />
            </div>
        </div>
    );
};

export default Position;