import React, { useState } from "react";
import SummaryWindow from "../workspace/SummaryWindow";
import TerminalWindow from "../workspace/TerminalWindow";
import style from "../workspace/WindowStyle.module.css"
import ButtonBoxCheck from "../workspace/ButtonBoxCheck";

const StyleUsage = () => {
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
   

    const [posterStates, setPosterStates] = useState({
        summaryIS: true,
        inlineStyles: true,
        summaryCSSInJS: true,
        cssInJS: true,
        summaryCSSModules: true,
        cssModules: true,
        cssModulesUsage: true,
        summarySF: true,
        separateFile: true,
        separateFileUsage: true,
    });

    return(
       <div>
             <div style={{
                display:'flex',
                justifyContent:'center',
                }}>
                <div className={style.columnSquare}>
                    <ButtonBoxCheck color={'red'} state={posterStates.summaryIS} setState={setPosterStates} keyName={"summaryIS"}/>
                    <ButtonBoxCheck color={'red'} state={posterStates.inlineStyles} setState={setPosterStates} keyName={"inlineStyles"}/>
                    
                </div>
                <div className={style.columnSquare}>
                    <ButtonBoxCheck color={'green'} state={posterStates.summaryCSSInJS} setState={setPosterStates} keyName={"summaryCSSInJS"}/>
                    <ButtonBoxCheck color={'green'} state={posterStates.cssInJS} setState={setPosterStates} keyName={"cssInJS"}/>
                    
                </div>
                <div className={style.columnSquare}>
                    <ButtonBoxCheck color={'blue'} state={posterStates.summaryCSSModules} setState={setPosterStates} keyName={"summaryCSSModules"}/>
                    <ButtonBoxCheck color={'blue'} state={posterStates.cssModules} setState={setPosterStates} keyName={"cssModules"}/>
                    <ButtonBoxCheck color={'blue'} state={posterStates.cssModulesUsage} setState={setPosterStates} keyName={"cssModulesUsage"}/>
                </div>
                <div className={style.columnSquare}>
                    <ButtonBoxCheck color={'yellow'} state={posterStates.summarySF} setState={setPosterStates} keyName={"summarySF"}/>
                    <ButtonBoxCheck color={'yellow'} state={posterStates.separateFile} setState={setPosterStates} keyName={"separateFile"}/>
                    <ButtonBoxCheck color={'yellow'} state={posterStates.separateFileUsage} setState={setPosterStates} keyName={"separateFileUsage"}/>
                </div>
            </div>

             <div>

             <SummaryWindow 
                    style={style.redSummWindow}
                    customStyle={{
                        marginTop:'-90px',
                        marginLeft:'200px',
                    }} 
                    filePath={summaryIS} 
                    showSummaryWindow={posterStates.summaryIS} 
                    setShowSummaryWindow ={setPosterStates}
                    keyName={"summaryIS"}
                />
                <TerminalWindow 
                    style={style.redTermWindow}
                    customStyle={{ 
                        marginTop:'-60px',
                        marginLeft:'200px',
                    }} 
                    filePath={inlineStyles} 
                    showTerminalWindow={posterStates.inlineStyles} 
                    setShowTerminalWindow={setPosterStates}
                    keyName={"inlineStyles"}
                />

                
                <SummaryWindow 
                    style={style.greenSummWindow}
                    customStyle={{
                        marginTop:'-90px',
                        marginLeft:'600px',
                    }} 
                    filePath={summaryCSSInJS} 
                    showSummaryWindow={posterStates.summaryCSSInJS} 
                    setShowSummaryWindow ={setPosterStates}
                    keyName={"summaryCSSInJS"}
                />
                <TerminalWindow 
                    style={style.greenTermWindow}
                    customStyle={{ 
                        marginTop:'20px',
                        marginLeft:'600px',
                    }} 
                    filePath={cssInJS} 
                    showTerminalWindow={posterStates.cssInJS} 
                    setShowTerminalWindow={setPosterStates}
                    keyName={"cssInJS"}
                />
                
                <SummaryWindow 
                    style={style.summaryWindow}
                    customStyle={{
                        marginTop:'-90px',
                        marginLeft:'1030px',
                    }} 
                    filePath={summaryCSSModules} 
                    showSummaryWindow={posterStates.summaryCSSModules} 
                    setShowSummaryWindow ={setPosterStates}
                    keyName={"summaryCSSModules"}
                />
                <TerminalWindow 
                    style={style.terminalWindow}
                    customStyle={{ 
                        marginTop:'-60px',
                        marginLeft:'1030px',
                    }} 
                    filePath={cssModules} 
                    showTerminalWindow={posterStates.cssModules} 
                    setShowTerminalWindow={setPosterStates}
                    keyName={"cssModules"}
                />
                <TerminalWindow 
                    style={style.terminalWindow}
                    customStyle={{ 
                        marginTop:'80px',
                        marginLeft:'1030px',
                    }} 
                    filePath={cssModulesUsage} 
                    showTerminalWindow={posterStates.cssModulesUsage} 
                    setShowTerminalWindow={setPosterStates}
                    keyName={"cssModulesUsage"}
                />


                <SummaryWindow 
                    style={style.yellowSummWindow}
                    customStyle={{
                        marginTop:'-90px',
                        marginLeft:'1410px',
                    }} 
                    filePath={summarySF} 
                    showSummaryWindow={posterStates.summarySF} 
                    setShowSummaryWindow ={setPosterStates}
                    keyName={"summarySF"}
                />
                <TerminalWindow 
                    style={style.yellowTermWindow}
                    customStyle={{ 
                        marginTop:'-60px',
                        marginLeft:'1410px',
                    }} 
                    filePath={separateFile} 
                    showTerminalWindow={posterStates.separateFile} 
                    setShowTerminalWindow={setPosterStates}
                    keyName={"separateFile"}
                />
                <TerminalWindow 
                    style={style.yellowTermWindow}
                    customStyle={{ 
                        marginTop:'170px',
                        marginLeft:'1410px',
                    }} 
                    filePath={separateFileUsage} 
                    showTerminalWindow={posterStates.separateFileUsage} 
                    setShowTerminalWindow={setPosterStates}
                    keyName={"separateFileUsage"}
                />
            </div>
       </div>
    );
};

export default StyleUsage;