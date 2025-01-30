import React from "react";
import SummaryWindow from "../workspace/SummaryWindow";
import TerminalWindow from "../workspace/TerminalWindow";
import style from "../workspace/WindowStyle.module.css"
import ButtonBoxCheck from "../workspace/ButtonBoxCheck";

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
                    customStyle={{
                        marginTop:'-90px',
                        marginLeft:'200px',
                    }} 
                    filePath={summaryMDC} 
                    showSummaryWindow={posterStates.summaryMDC} 
                    setShowSummaryWindow ={()=> handleStateChange("summaryMDC")}
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
                    setShowTerminalWindow={()=> handleStateChange("mainDivContainer")}
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
                    setShowSummaryWindow ={()=> handleStateChange("summaryDWB")}
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
                    setShowTerminalWindow={()=> handleStateChange("divWithBoxes")}
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
                    setShowSummaryWindow ={()=> handleStateChange("summaryB")}
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
                    setShowTerminalWindow={()=> handleStateChange("boxes")}
                    keyName={"boxes"}
                />
            </div>
        </div>
    );
};

export default FLEXBox;