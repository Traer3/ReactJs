import React  from "react";
import TerminalWindow from "../../Windows/TerminalWindow";
import SummaryWindow from "../../Windows/SummaryWindow";
import style from "../../Windows/WindowStyle.module.css"
import ButtonBoxCheck from "../ButtonBoxCheck";

const summaryPositions = "/summary/Position/SummaryPositions.txt"
const positions =  "/summary/Position/Positions.txt"


const summaryTextPositions = "/summary/Position/SummaryTextPositions.txt"
const textPositions = "/summary/Position/TextPositions.txt"


const summaryWH = "/summary/Position/SummaryWidthHeight.txt"
const widthHeight = "/summary/Position/WidthHeight.txt"

const Position = ({posterStates, updatePosterState}) => {
   
    const posterName = "Position"

    const handleStateChange = (key) =>{
        const updatedState = {...posterStates, [key]: !posterStates[key]};
        updatePosterState(posterName, updatedState)
     };

    return(
        <div>
             <div style={{
                display:'flex',
                justifyContent:'center',
                }}>
                <div className={style.columnSquare}>
                    <ButtonBoxCheck color={'red'} state={posterStates.summaryPositions} setState={()=> handleStateChange("summaryPositions")} keyName={"summaryPositions"}/>
                    <ButtonBoxCheck color={'red'} state={posterStates.positions} setState={()=> handleStateChange("positions")} keyName={"positions"}/>
                    
                </div>
                <div className={style.columnSquare}>
                    <ButtonBoxCheck color={'green'} state={posterStates.summaryTextPositions} setState={()=> handleStateChange("summaryTextPositions")} keyName={"summaryTextPositions"}/>
                    <ButtonBoxCheck color={'green'} state={posterStates.textPositions} setState={()=> handleStateChange("textPositions")} keyName={"textPositions"}/>
                    
                </div>
                <div className={style.columnSquare}>
                    <ButtonBoxCheck color={'blue'} state={posterStates.summaryWH} setState={()=> handleStateChange("summaryWH")} keyName={"summaryWH"}/>
                    <ButtonBoxCheck color={'blue'} state={posterStates.widthHeight} setState={()=> handleStateChange("widthHeight")} keyName={"widthHeight"}/>
                </div>
            </div>
            <div>
                <SummaryWindow 
                    style={style.redSummWindow}
                    filePath={summaryPositions} 
                    showSummaryWindow={posterStates.summaryPositions} 
                    setShowSummaryWindow ={()=> handleStateChange("summaryPositions")}
                    keyName={"summaryPositions"}
                    getPosition={posterStates.positionSummaryPositions}
                    posterStates={posterStates}
                    updatePosterState={updatePosterState}
                    positionName={"positionSummaryPositions"}
                    posterName={posterName}
                />
                <TerminalWindow 
                    style={style.redTermWindow}
                    filePath={positions} 
                    showTerminalWindow={posterStates.positions} 
                    setShowTerminalWindow={()=> handleStateChange("positions")}
                    keyName={"positions"}
                    getPosition={posterStates.positionPositions}
                    posterStates={posterStates}
                    updatePosterState={updatePosterState}
                    positionName={"positionPositions"}
                    posterName={posterName}
                />

                <SummaryWindow 
                    style={style.greenSummWindow}
                    filePath={summaryTextPositions} 
                    showSummaryWindow={posterStates.summaryTextPositions} 
                    setShowSummaryWindow ={()=> handleStateChange("summaryTextPositions")}
                    keyName={"summaryTextPositions"}
                    getPosition={posterStates.positionSummaryTextPositions}
                    posterStates={posterStates}
                    updatePosterState={updatePosterState}
                    positionName={"positionSummaryTextPositions"}
                    posterName={posterName}
                />
                <TerminalWindow 
                    style={style.greenTermWindow}
                    filePath={textPositions} 
                    showTerminalWindow={posterStates.textPositions} 
                    setShowTerminalWindow={()=> handleStateChange("textPositions")}
                    keyName={"textPositions"}
                    getPosition={posterStates.positionTextPositions}
                    posterStates={posterStates}
                    updatePosterState={updatePosterState}
                    positionName={"positionTextPositions"}
                    posterName={posterName}
                />

                <SummaryWindow 
                    style={style.summaryWindow}
                    filePath={summaryWH} 
                    showSummaryWindow={posterStates.summaryWH} 
                    setShowSummaryWindow ={()=> handleStateChange("summaryWH")}
                    keyName={"summaryWH"}
                    getPosition={posterStates.positionSummaryWH}
                    posterStates={posterStates}
                    updatePosterState={updatePosterState}
                    positionName={"positionSummaryWH"}
                    posterName={posterName}
                />
                <TerminalWindow 
                    style={style.terminalWindow} 
                    filePath={widthHeight} 
                    showTerminalWindow={posterStates.widthHeight} 
                    setShowTerminalWindow={()=> handleStateChange("widthHeight")}
                    keyName={"widthHeight"}
                    getPosition={posterStates.positionWidthHeight}
                    posterStates={posterStates}
                    updatePosterState={updatePosterState}
                    positionName={"positionWidthHeight"}
                    posterName={posterName}
                />
            </div>
        </div>
    );
};

export default Position;