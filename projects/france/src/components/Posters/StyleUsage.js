import React, { useState } from "react";
import SummaryWindow from "../workspace/SummaryWindow";
import TerminalWindow from "../workspace/TerminalWindow";
import style from "../workspace/WindowStyle.module.css"
import ButtonBoxCheck from "../workspace/ButtonBoxCheck";

const StyleUsage = () => {
    const summaryIS = "/summary/StyleUsage/SummaryIS.txt"
    const inlineStyles = "/summary/StyleUsage/InlineStyles.txt"
    const [showSummaryIS, setShowSummaryIS] = useState(true);
    const [showInlineStyles, setShowInlineStyles] = useState(true);

    const summaryCSSInJS = "/summary/StyleUsage/SummaryCSSinJS.txt"
    const cssInJS = "/summary/StyleUsage/CSSinJS.txt"
    const [showSummaryCSSInJS, setShowSummaryCSSInJS] = useState(true);
    const [showCssInJS, setShowCssInJS] = useState(true);

    const summaryCSSModules = "/summary/StyleUsage/SummaryCSSmodules.txt"
    const cssModules = "/summary/StyleUsage/CSSmodules.txt"
    const cssModulesUsage = "/summary/StyleUsage/CSSmodulesUsage.txt"
    const [showSummaryCSSModules, setShowSummaryCSSModules] = useState(true);
    const [showCssModules, setShowCssModules] = useState(true);
    const [showCssModulesUsage, setShowCssModulesUsage] = useState(true);

    const summarySF = "/summary/StyleUsage/SummarySF.txt"
    const separateFile = "/summary/StyleUsage/SeparateFile.txt"
    const separateFileUsage = "/summary/StyleUsage/SeparateFileUsage.txt"
    const [showSummarySF, setShowSummarySF] = useState(true);
    const [showSeparateFile, setShowSeparateFile] = useState(true);
    const [showSeparateFileUsage, setShowSeparateFileUsage] = useState(true);

    return(
       <div>
             <div style={{
                display:'flex',
                justifyContent:'center',
                }}>
                <div className={style.columnSquare}>
                    <ButtonBoxCheck color={'red'} state={showSummaryIS} setState={setShowSummaryIS}/>
                    <ButtonBoxCheck color={'red'} state={showInlineStyles} setState={setShowInlineStyles}/>
                    
                </div>
                <div className={style.columnSquare}>
                    <ButtonBoxCheck color={'green'} state={showSummaryCSSInJS} setState={setShowSummaryCSSInJS}/>
                    <ButtonBoxCheck color={'green'} state={showCssInJS} setState={setShowCssInJS}/>
                    
                </div>
                <div className={style.columnSquare}>
                    <ButtonBoxCheck color={'blue'} state={showSummaryCSSModules} setState={setShowSummaryCSSModules}/>
                    <ButtonBoxCheck color={'blue'} state={showCssModules} setState={setShowCssModules}/>
                    <ButtonBoxCheck color={'blue'} state={showCssModulesUsage} setState={setShowCssModulesUsage}/>
                </div>
                <div className={style.columnSquare}>
                    <ButtonBoxCheck color={'yellow'} state={showSummarySF} setState={setShowSummarySF}/>
                    <ButtonBoxCheck color={'yellow'} state={showSeparateFile} setState={setShowSeparateFile}/>
                    <ButtonBoxCheck color={'yellow'} state={showSeparateFileUsage} setState={setShowSeparateFileUsage}/>
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
                    showSummaryWindow={showSummaryIS} 
                    setShowSummaryWindow ={setShowSummaryIS}
                />
                <TerminalWindow 
                    style={style.redTermWindow}
                    customStyle={{ 
                        marginTop:'-60px',
                        marginLeft:'200px',
                    }} 
                    filePath={inlineStyles} 
                    showTerminalWindow={showInlineStyles} 
                    setShowTerminalWindow={setShowInlineStyles}
                />

                
                <SummaryWindow 
                    style={style.greenSummWindow}
                    customStyle={{
                        marginTop:'-90px',
                        marginLeft:'600px',
                    }} 
                    filePath={summaryCSSInJS} 
                    showSummaryWindow={showSummaryCSSInJS} 
                    setShowSummaryWindow ={setShowSummaryCSSInJS}
                />
                <TerminalWindow 
                    style={style.greenTermWindow}
                    customStyle={{ 
                        marginTop:'20px',
                        marginLeft:'600px',
                    }} 
                    filePath={cssInJS} 
                    showTerminalWindow={showCssInJS} 
                    setShowTerminalWindow={setShowCssInJS}
                />
                
                <SummaryWindow 
                    style={style.summaryWindow}
                    customStyle={{
                        marginTop:'-90px',
                        marginLeft:'1030px',
                    }} 
                    filePath={summaryCSSModules} 
                    showSummaryWindow={showSummaryCSSModules} 
                    setShowSummaryWindow ={setShowSummaryCSSModules}
                />
                <TerminalWindow 
                    style={style.terminalWindow}
                    customStyle={{ 
                        marginTop:'-60px',
                        marginLeft:'1030px',
                    }} 
                    filePath={cssModules} 
                    showTerminalWindow={showCssModules} 
                    setShowTerminalWindow={setShowCssModules}
                />
                <TerminalWindow 
                    style={style.terminalWindow}
                    customStyle={{ 
                        marginTop:'80px',
                        marginLeft:'1030px',
                    }} 
                    filePath={cssModulesUsage} 
                    showTerminalWindow={showCssModulesUsage} 
                    setShowTerminalWindow={setShowCssModulesUsage}
                />


                <SummaryWindow 
                    style={style.yellowSummWindow}
                    customStyle={{
                        marginTop:'-90px',
                        marginLeft:'1410px',
                    }} 
                    filePath={summarySF} 
                    showSummaryWindow={showSummarySF} 
                    setShowSummaryWindow ={setShowSummarySF}
                />
                <TerminalWindow 
                    style={style.yellowTermWindow}
                    customStyle={{ 
                        marginTop:'-60px',
                        marginLeft:'1410px',
                    }} 
                    filePath={separateFile} 
                    showTerminalWindow={showSeparateFile} 
                    setShowTerminalWindow={setShowSeparateFile}
                />
                <TerminalWindow 
                    style={style.yellowTermWindow}
                    customStyle={{ 
                        marginTop:'170px',
                        marginLeft:'1410px',
                    }} 
                    filePath={separateFileUsage} 
                    showTerminalWindow={showSeparateFileUsage} 
                    setShowTerminalWindow={setShowSeparateFileUsage}
                />
            </div>
       </div>
    );
};

export default StyleUsage;