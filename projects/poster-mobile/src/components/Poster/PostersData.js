import React, { useState } from "react";
import PosterMain from "./PosterMain";

const PostersData = ({userId})=> {
    
    const [posterStateArray, setPosterStateArray] = useState([
        {name: "TwoAnswers", state:{
            logicAND: true,
            logicANDExample: true,
            logicANDCode: true,
            ternaryCode: true,
            ternaryOperatorData: true,
        }},
        {name: "DisplayElements", state:{
            ternaryMethod: true,
            summaryTM: true,
            AND: true,
            logicANDSummary: true,
        }},
        {name: "FLEXBox", state:{
            summaryMDC: true,
            mainDivContainer: true,
            summaryDWB: true,
            divWithBoxes: true,
            summaryB: true,
            boxes: true,
        }},
        {name: "StyleUsage", state:{
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
        }},
        {name: "ProblemsWithStyles", state:{
            summary: true,
            menuPanel: true,
            menuPanelStyles: true,
        }},
        {name: "Position", state:{
            summaryPositions: true,
            positions: true,
            summaryTextPositions: true,
            textPositions: true,
            summaryWH: true,
            widthHeight: true,    
        }},
    ]);

    return(
        <PosterMain posterStateArray={posterStateArray} setPosterStateArray ={setPosterStateArray} userId={userId}/> 
    );
};

export default PostersData;