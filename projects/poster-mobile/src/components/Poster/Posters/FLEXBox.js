import React from "react";
import TerminalWindow from "../../Windows/TerminalWindow";
import SummaryWindow from "../../Windows/SummaryWindow";
import style from "../../Windows/WindowStyle.module.css"
import ButtonBoxCheck from "../ButtonBoxCheck";

    const summaryMDC = "/summary/FlexBox/SummaryMDC.txt"
    const mainDivContainer = "/summary/FlexBox/MainDivContainer.txt"
    
    const summaryDWB = "/summary/FlexBox/SummaryDWB.txt"
    const divWithBoxes = "/summary/FlexBox/DivWithBoxes.txt"
    
    const summaryB = "/summary/FlexBox/SummaryB.txt"
    const boxes = "/summary/FlexBox/Boxes.txt"

const FLEXBox = ({posterStates, updatePosterState}) => {
    
  
    const handleStateChange = (key) =>{
        const updatedState = {...posterStates, [key]: !posterStates[key]};
        updatePosterState("FLEXBox", updatedState)
     };


    return(
        <div>
            <div style={{
                display:'flex',
                justifyContent:'center',
                }}>
                <div className={style.columnSquare}>
                    <ButtonBoxCheck color={'red'} state={posterStates.summaryMDC} setState={()=> handleStateChange("summaryMDC")} keyName={"summaryMDC"}/>
                    <ButtonBoxCheck color={'red'} state={posterStates.mainDivContainer} setState={()=> handleStateChange("mainDivContainer")} keyName={"mainDivContainer"}/>
                    
                </div>
                <div className={style.columnSquare}>
                    <ButtonBoxCheck color={'green'} state={posterStates.summaryDWB} setState={()=> handleStateChange("summaryDWB")} keyName={"summaryDWB"}/>
                    <ButtonBoxCheck color={'green'} state={posterStates.divWithBoxes} setState={()=> handleStateChange("divWithBoxes")} keyName={"divWithBoxes"}/>
                    
                </div>
                <div className={style.columnSquare}>
                    <ButtonBoxCheck color={'blue'} state={posterStates.summaryB} setState={()=> handleStateChange("summaryB")} keyName={"summaryB"}/>
                    <ButtonBoxCheck color={'blue'} state={posterStates.boxes} setState={()=> handleStateChange("boxes")} keyName={"boxes"}/>
                </div>
            </div>
            <div>
                <SummaryWindow 
                    style={style.redSummWindow}
                    filePath={summaryMDC} 
                    showSummaryWindow={posterStates.summaryMDC} 
                    setShowSummaryWindow ={()=> handleStateChange("summaryMDC")}
                    keyName={"summaryMDC"}
                    getPosition={posterStates.positionSummaryMDC}
                />
                <TerminalWindow 
                    style={style.redTermWindow}
                    filePath={mainDivContainer} 
                    showTerminalWindow={posterStates.mainDivContainer} 
                    setShowTerminalWindow={()=> handleStateChange("mainDivContainer")}
                    keyName={"mainDivContainer"}
                    getPosition={posterStates.positionMainDivContainer}
                />

                <SummaryWindow 
                    style={style.greenSummWindow}
                    filePath={summaryDWB} 
                    showSummaryWindow={posterStates.summaryDWB} 
                    setShowSummaryWindow ={()=> handleStateChange("summaryDWB")}
                    keyName={"summaryDWB"}
                    getPosition={posterStates.positionSummaryDWB}
                />
                <TerminalWindow 
                    style={style.greenSummWindow} 
                    filePath={divWithBoxes} 
                    showTerminalWindow={posterStates.divWithBoxes} 
                    setShowTerminalWindow={()=> handleStateChange("divWithBoxes")}
                    keyName={"divWithBoxes"}
                    getPosition={posterStates.positionDivWithBoxes}
                />

                <SummaryWindow 
                    style={style.summaryWindow}
                    filePath={summaryB} 
                    showSummaryWindow={posterStates.summaryB} 
                    setShowSummaryWindow ={()=> handleStateChange("summaryB")}
                    keyName={"summaryB"}
                    getPosition={posterStates.positionSummaryB}
                />
                <TerminalWindow 
                    style={style.terminalWindow}
                    filePath={boxes} 
                    showTerminalWindow={posterStates.boxes} 
                    setShowTerminalWindow={()=> handleStateChange("boxes")}
                    keyName={"boxes"}
                    getPosition={posterStates.positionBoxes}
                />
            </div>
        </div>
    );
};

export default FLEXBox;