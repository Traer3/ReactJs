import React, { useState } from "react";
import SummaryWindow from "../workspace/SummaryWindow";
import TerminalWindow from "../workspace/TerminalWindow";
import style from "../workspace/WindowStyle.module.css"
import ButtonBoxCheck from "../workspace/ButtonBoxCheck";

const FLEXBox = () => {
    const summaryMDC = "/summary/FlexBox/SummaryMDC.txt"
    const mainDivContainer = "/summary/FlexBox/MainDivContainer.txt"
    const [showSummaryMDC, setShowSummaryMDC] = useState(true);
    const [showMainDivContainer, setShowMainDivContainer] = useState(true);
    
    const summaryDWB = "/summary/FlexBox/SummaryDWB.txt"
    const divWithBoxes = "/summary/FlexBox/DivWithBoxes.txt"
    const [showsummaryDWB, setShowsummaryDWB] = useState(true);
    const [showDivWithBoxes, setShowDivWithBoxes] = useState(true);
    
    const summaryB = "/summary/FlexBox/SummaryB.txt"
    const boxes = "/summary/FlexBox/Boxes.txt"
    const [showSummaryB, setShowSummaryB] = useState(true);
    const [showBoxes, setShowBoxes] = useState(true);
   


    return(
        <div>
            <div style={{
                display:'flex',
                justifyContent:'center',
                }}>
                <div className={style.columnSquare}>
                    <ButtonBoxCheck color={'red'} state={showSummaryMDC} setState={setShowSummaryMDC}/>
                    <ButtonBoxCheck color={'red'} state={showMainDivContainer} setState={setShowMainDivContainer}/>
                    
                </div>
                <div className={style.columnSquare}>
                    <ButtonBoxCheck color={'green'} state={showsummaryDWB} setState={setShowsummaryDWB}/>
                    <ButtonBoxCheck color={'green'} state={showDivWithBoxes} setState={setShowDivWithBoxes}/>
                    
                </div>
                <div className={style.columnSquare}>
                    <ButtonBoxCheck color={'blue'} state={showSummaryB} setState={setShowSummaryB}/>
                    <ButtonBoxCheck color={'blue'} state={showBoxes} setState={setShowBoxes}/>
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
                    showSummaryWindow={showSummaryMDC} 
                    setShowSummaryWindow ={setShowSummaryMDC}
                />
                <TerminalWindow 
                    style={style.redTermWindow}
                    customStyle={{ 
                        marginTop:'-45px',
                        marginLeft:'200px',
                    }} 
                    filePath={mainDivContainer} 
                    showTerminalWindow={showMainDivContainer} 
                    setShowTerminalWindow={setShowMainDivContainer}
                />

                <SummaryWindow 
                    style={style.greenSummWindow}
                    customStyle={{
                        marginTop:'-90px',
                        marginLeft:'580px',
                    }} 
                    filePath={summaryDWB} 
                    showSummaryWindow={showsummaryDWB} 
                    setShowSummaryWindow ={setShowsummaryDWB}
                />
                <TerminalWindow 
                    style={style.greenSummWindow}
                    customStyle={{ 
                        marginTop:'120px',
                        marginLeft:'580px',
                    }} 
                    filePath={divWithBoxes} 
                    showTerminalWindow={showDivWithBoxes} 
                    setShowTerminalWindow={setShowDivWithBoxes}
                />

                <SummaryWindow 
                    style={style.summaryWindow}
                    customStyle={{
                        marginTop:'-90px',
                        marginLeft:'980px',
                    }} 
                    filePath={summaryB} 
                    showSummaryWindow={showSummaryB} 
                    setShowSummaryWindow ={setShowSummaryB}
                />
                <TerminalWindow 
                    style={style.terminalWindow}
                    customStyle={{ 
                        marginTop:'-45px',
                        marginLeft:'980px',
                    }} 
                    filePath={boxes} 
                    showTerminalWindow={showBoxes} 
                    setShowTerminalWindow={setShowBoxes}
                />
            </div>
        </div>
    );
};

export default FLEXBox;