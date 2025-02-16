import React from "react";
import TerminalWindow from "../../Windows/TerminalWindow";
import SummaryWindow from "../../Windows/SummaryWindow";
import style from "../../Windows/WindowStyle.module.css"
import ButtonBoxCheck from "../ButtonBoxCheck";

    const summaryIS = "/summary/StyleUsage/SummaryIS.txt"
    const inlineStyles = "/summary/StyleUsage/InlineStyles.txt"

    const summaryCSSInJS = "/summary/StyleUsage/SummaryCSSinJS.txt"
    const cssInJS = "/summary/StyleUsage/CSSinJS.txt"


    const summaryCSSModules = "/summary/StyleUsage/SummaryCSSmodules.txt"
    const cssModules = "/summary/StyleUsage/CSSmodules.txt"
    const cssModulesUsage = "/summary/StyleUsage/CSSmodulesUsage.txt"


    const summarySF = "/summary/StyleUsage/SummarySF.txt"
    const separateFile = "/summary/StyleUsage/SeparateFile.txt"
    const separateFileUsage = "/summary/StyleUsage/SeparateFileUsage.txt"

const StyleUsage = ({posterStates, updatePosterState}) => {
    
   const posterName = "StyleUsage"

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
                    <ButtonBoxCheck color={'red'} state={posterStates.summaryIS} setState={()=> handleStateChange("summaryIS")} keyName={"summaryIS"}/>
                    <ButtonBoxCheck color={'red'} state={posterStates.inlineStyles} setState={()=> handleStateChange("inlineStyles")} keyName={"inlineStyles"}/>
                    
                </div>
                <div className={style.columnSquare}>
                    <ButtonBoxCheck color={'green'} state={posterStates.summaryCSSInJS} setState={()=> handleStateChange("summaryCSSInJS")} keyName={"summaryCSSInJS"}/>
                    <ButtonBoxCheck color={'green'} state={posterStates.cssInJS} setState={()=> handleStateChange("cssInJS")} keyName={"cssInJS"}/>
                    
                </div>
                <div className={style.columnSquare}>
                    <ButtonBoxCheck color={'blue'} state={posterStates.summaryCSSModules} setState={()=> handleStateChange("summaryCSSModules")} keyName={"summaryCSSModules"}/>
                    <ButtonBoxCheck color={'blue'} state={posterStates.cssModules} setState={()=> handleStateChange("cssModules")} keyName={"cssModules"}/>
                    <ButtonBoxCheck color={'blue'} state={posterStates.cssModulesUsage} setState={()=> handleStateChange("cssModulesUsage")} keyName={"cssModulesUsage"}/>
                </div>
                <div className={style.columnSquare}>
                    <ButtonBoxCheck color={'yellow'} state={posterStates.summarySF} setState={()=> handleStateChange("summarySF")} keyName={"summarySF"}/>
                    <ButtonBoxCheck color={'yellow'} state={posterStates.separateFile} setState={()=> handleStateChange("separateFile")} keyName={"separateFile"}/>
                    <ButtonBoxCheck color={'yellow'} state={posterStates.separateFileUsage} setState={()=> handleStateChange("separateFileUsage")} keyName={"separateFileUsage"}/>
                </div>
            </div>

             <div>

             <SummaryWindow 
                    style={style.redSummWindow}
                    filePath={summaryIS} 
                    showSummaryWindow={posterStates.summaryIS} 
                    setShowSummaryWindow ={()=> handleStateChange("summaryIS")}
                    keyName={"summaryIS"}
                    getPosition={posterStates.positionSummaryIS}
                    posterStates={posterStates}
                    updatePosterState={updatePosterState}
                    positionName={"positionSummaryIS"}
                    posterName={posterName}
                />
                <TerminalWindow 
                    style={style.redTermWindow}
                    filePath={inlineStyles} 
                    showTerminalWindow={posterStates.inlineStyles} 
                    setShowTerminalWindow={()=> handleStateChange("inlineStyles")}
                    keyName={"inlineStyles"}
                    getPosition={posterStates.positionInlineStyles}
                    posterStates={posterStates}
                    updatePosterState={updatePosterState}
                    positionName={"positionInlineStyles"}
                    posterName={posterName}
                />

                
                <SummaryWindow 
                    style={style.greenSummWindow}
                    filePath={summaryCSSInJS} 
                    showSummaryWindow={posterStates.summaryCSSInJS} 
                    setShowSummaryWindow ={()=> handleStateChange("summaryCSSInJS")}
                    keyName={"summaryCSSInJS"}
                    getPosition={posterStates.positionSummaryCSSInJS}
                    posterStates={posterStates}
                    updatePosterState={updatePosterState}
                    positionName={"positionSummaryCSSInJS"}
                    posterName={posterName}
                />
                <TerminalWindow 
                    style={style.greenTermWindow}
                    filePath={cssInJS} 
                    showTerminalWindow={posterStates.cssInJS} 
                    setShowTerminalWindow={()=> handleStateChange("cssInJS")}
                    keyName={"cssInJS"}
                    getPosition={posterStates.positionCSSInJS}
                    posterStates={posterStates}
                    updatePosterState={updatePosterState}
                    positionName={"positionCSSInJS"}
                    posterName={posterName}
                />
                
                <SummaryWindow 
                    style={style.summaryWindow}
                    filePath={summaryCSSModules} 
                    showSummaryWindow={posterStates.summaryCSSModules} 
                    setShowSummaryWindow ={()=> handleStateChange("summaryCSSModules")}
                    keyName={"summaryCSSModules"}
                    getPosition={posterStates.positionSummaryCSSModules}
                    posterStates={posterStates}
                    updatePosterState={updatePosterState}
                    positionName={"positionSummaryCSSModules"}
                    posterName={posterName}
                />
                <TerminalWindow 
                    style={style.terminalWindow}
                    filePath={cssModules} 
                    showTerminalWindow={posterStates.cssModules} 
                    setShowTerminalWindow={()=> handleStateChange("cssModules")}
                    keyName={"cssModules"}
                    getPosition={posterStates.positionCSSModules}
                    posterStates={posterStates}
                    updatePosterState={updatePosterState}
                    positionName={"positionCSSModules"}
                    posterName={posterName}
                />
                <TerminalWindow 
                    style={style.terminalWindow}
                    filePath={cssModulesUsage} 
                    showTerminalWindow={posterStates.cssModulesUsage} 
                    setShowTerminalWindow={()=> handleStateChange("cssModulesUsage")}
                    keyName={"cssModulesUsage"}
                    getPosition={posterStates.positionCSSModulesUsage}
                    posterStates={posterStates}
                    updatePosterState={updatePosterState}
                    positionName={"positionCSSModulesUsage"}
                    posterName={posterName}
                />


                <SummaryWindow 
                    style={style.yellowSummWindow}
                    filePath={summarySF} 
                    showSummaryWindow={posterStates.summarySF} 
                    setShowSummaryWindow ={()=> handleStateChange("summarySF")}
                    keyName={"summarySF"}
                    getPosition={posterStates.positionSummarySF}
                    posterStates={posterStates}
                    updatePosterState={updatePosterState}
                    positionName={"positionSummarySF"}
                    posterName={posterName}
                />
                <TerminalWindow 
                    style={style.yellowTermWindow} 
                    filePath={separateFile} 
                    showTerminalWindow={posterStates.separateFile} 
                    setShowTerminalWindow={()=> handleStateChange("separateFile")}
                    keyName={"separateFile"}
                    getPosition={posterStates.positionSeparateFile}
                    posterStates={posterStates}
                    updatePosterState={updatePosterState}
                    positionName={"positionSeparateFile"}
                    posterName={posterName}
                />
                <TerminalWindow 
                    style={style.yellowTermWindow}
                    filePath={separateFileUsage} 
                    showTerminalWindow={posterStates.separateFileUsage} 
                    setShowTerminalWindow={()=> handleStateChange("separateFileUsage")}
                    keyName={"separateFileUsage"}
                    getPosition={posterStates.positionSeparateFileUsage}
                    posterStates={posterStates}
                    updatePosterState={updatePosterState}
                    positionName={"positionSeparateFileUsage"}
                    posterName={posterName}
                />
            </div>
       </div>
    );
};

export default StyleUsage;