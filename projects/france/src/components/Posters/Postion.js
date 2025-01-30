import React  from "react";
import SummaryWindow from "../workspace/SummaryWindow";
import TerminalWindow from "../workspace/TerminalWindow";
import style from "../workspace/WindowStyle.module.css"
import ButtonBoxCheck from "../workspace/ButtonBoxCheck";

const summaryPositions = "/summary/Position/SummaryPositions.txt"
const positions =  "/summary/Position/Positions.txt"


const summaryTextPositions = "/summary/Position/SummaryTextPositions.txt"
const textPositions = "/summary/Position/TextPositions.txt"


const summaryWH = "/summary/Position/SummaryWidthHeight.txt"
const widthHeight = "/summary/Position/WidthHeight.txt"

const Position = ({posterStates, updatePosterState}) => {
   


    const handleStateChange = (key) =>{
        const updatedState = {...posterStates, [key]: !posterStates[key]};
        updatePosterState("Position", updatedState)
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
                    customStyle={{
                        marginTop:'-90px',
                        marginLeft:'200px',
                    }} 
                    filePath={summaryPositions} 
                    showSummaryWindow={posterStates.summaryPositions} 
                    setShowSummaryWindow ={()=> handleStateChange("summaryPositions")}
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
                    setShowTerminalWindow={()=> handleStateChange("positions")}
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
                    setShowSummaryWindow ={()=> handleStateChange("summaryTextPositions")}
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
                    setShowTerminalWindow={()=> handleStateChange("textPositions")}
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
                    setShowSummaryWindow ={()=> handleStateChange("summaryWH")}
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
                    setShowTerminalWindow={()=> handleStateChange("widthHeight")}
                    keyName={"widthHeight"}
                />
            </div>
        </div>
    );
};

export default Position;