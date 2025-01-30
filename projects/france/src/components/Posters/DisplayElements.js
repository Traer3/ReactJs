import React from "react";
import SummaryWindow from "../workspace/SummaryWindow";
import TerminalWindow from "../workspace/TerminalWindow";
import style from "../workspace/WindowStyle.module.css"
import ButtonBoxCheck from "../workspace/ButtonBoxCheck";

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
                    customStyle={{
                        marginTop:'-90px',
                        marginLeft:'200px',
                    }} 
                    filePath={summaryTM} 
                    showSummaryWindow={posterStates.summaryTM} 
                    setShowSummaryWindow ={()=> handleStateChange("summaryTM")}
                    keyName={"summaryTM"}
                />
                <TerminalWindow 
                    style={style.redTermWindow}
                    customStyle={{ 
                        marginTop:'-55px',
                        marginLeft:'200px',
                    }} 
                    filePath={ternaryMethod} 
                    showTerminalWindow={posterStates.ternaryMethod} 
                    setShowTerminalWindow={()=> handleStateChange("ternaryMethod")}
                    keyName={"ternaryMethod"}
                />

                  <SummaryWindow 
                    style={style.greenSummWindow}
                    customStyle={{
                        marginTop:'-90px',
                        marginLeft:'700px',
                    }} 
                    filePath={logicANDSummary} 
                    showSummaryWindow={posterStates.logicANDSummary} 
                    setShowSummaryWindow ={()=> handleStateChange("logicANDSummary")}
                    keyName={"logicANDSummary"}
                />
                <TerminalWindow 
                    style={style.greenSummWindow}
                    customStyle={{ 
                        marginTop:'-55px',
                        marginLeft:'700px',
                    }} 
                    filePath={AND} 
                    showTerminalWindow={posterStates.AND} 
                    setShowTerminalWindow={()=> handleStateChange("AND")}
                    keyName={"AND"}
                />
            </div>
        </div>
    );
};

export default DisplayElements;