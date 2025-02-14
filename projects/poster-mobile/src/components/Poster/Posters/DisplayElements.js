import React from "react";
import TerminalWindow from "../../Windows/TerminalWindow";
import SummaryWindow from "../../Windows/SummaryWindow";
import style from "../../Windows/WindowStyle.module.css"
import ButtonBoxCheck from "../ButtonBoxCheck";

      const ternaryMethod = "/summary/DisplayElements/TernaryMethod.txt"
      const summaryTM = "/summary/DisplayElements/TM.txt"

      const AND = "/summary/DisplayElements/AND.txt"
      const logicANDSummary = "/summary/DisplayElements/LogicANDSummary.txt"

const DisplayElements = ({posterStates, updatePosterState}) => {
      

    const handleStateChange = (key) =>{
       const updatedState = {...posterStates, [key]: !posterStates[key]};
       updatePosterState("DisplayElements", updatedState)
    };

    return(
        <div>
            <div style={{
                display:'flex',
                justifyContent:'center',
                }}>
                <div className={style.columnSquare}>
                    <ButtonBoxCheck color={'red'} state={posterStates.summaryTM} setState={()=> handleStateChange("summaryTM")} keyName={"summaryTM"}/>
                    <ButtonBoxCheck color={'red'} state={posterStates.ternaryMethod} setState={()=> handleStateChange("ternaryMethod")} keyName={"ternaryMethod"}/>
                </div>
                <div className={style.columnSquare}>
                    <ButtonBoxCheck color={'green'} state={posterStates.logicANDSummary} setState={()=> handleStateChange("logicANDSummary")} keyName={"logicANDSummary"}/>
                    <ButtonBoxCheck color={'green'} state={posterStates.AND} setState={()=> handleStateChange("AND")} keyName={"AND"}/>
                </div>
            </div>

            <div>
                  <SummaryWindow 
                    style={style.redSummWindow}
                    filePath={summaryTM} 
                    showSummaryWindow={posterStates.summaryTM} 
                    setShowSummaryWindow ={()=> handleStateChange("summaryTM")}
                    keyName={"summaryTM"}
                    getPosition={posterStates.positionTernaryMethod}
                />
                <TerminalWindow 
                    style={style.redTermWindow}
                    filePath={ternaryMethod} 
                    showTerminalWindow={posterStates.ternaryMethod} 
                    setShowTerminalWindow={()=> handleStateChange("ternaryMethod")}
                    keyName={"ternaryMethod"}
                    getPosition={posterStates.positionSummaryTM}
                />

                  <SummaryWindow 
                    style={style.greenSummWindow}
                    filePath={logicANDSummary} 
                    showSummaryWindow={posterStates.logicANDSummary} 
                    setShowSummaryWindow ={()=> handleStateChange("logicANDSummary")}
                    keyName={"logicANDSummary"}
                    getPosition={posterStates.positionAND}
                />
                <TerminalWindow 
                    style={style.greenSummWindow}
                    filePath={AND} 
                    showTerminalWindow={posterStates.AND} 
                    setShowTerminalWindow={()=> handleStateChange("AND")}
                    keyName={"AND"}
                    getPosition={posterStates.positionLogicANDSummary}
                />
            </div>
        </div>
    );
};

export default DisplayElements;