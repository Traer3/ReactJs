import React, { useState } from "react";
import PosterMain from "./PosterMain";

const PostersData = ({userId })=> {
    
    const [posterStateArray, setPosterStateArray] = useState([
        {
            name: "TwoAnswers",
            state: {
                logicAND: true,
                positionLogicAND: { x:156, y: -88},
    
                logicANDExample: true,
                positionLogicANDExample: {x:156, y:23},
    
                logicANDCode: true,
                positionLogicANDCode: {x:731, y:-85},
    
                ternaryCode: true,
                positionTernaryCode: {x:731, y:-9},
    
                ternaryOperatorData: true,
                positionTernaryOperatorData: {x:731, y:329},
            },
        },
        {
            name: "DisplayElements",
            state: {
                ternaryMethod: true,
                positionTernaryMethod: {x: 159, y: -87},
    
                summaryTM: true,
                positionSummaryTM: {x: 159, y: -42},
    
                AND: true,
                positionAND: {x: 635, y: -85},
    
                logicANDSummary: true,
                positionLogicANDSummary: {x: 635, y: -47},
            },
        },
        {
            name: "FLEXBox",
            state: {
                summaryMDC: true,
                positionSummaryMDC: {x: 156, y: -89},
    
                mainDivContainer: true,
                positionMainDivContainer: {x: 156, y: -42},
    
                summaryDWB: true,
                positionSummaryDWB: {x: 523, y: -88},
    
                divWithBoxes: true,
                positionDivWithBoxes: {x: 523, y: 123},
    
                summaryB: true,
                positionSummaryB: {x: 894, y: -91},
    
                boxes: true,
                positionBoxes: {x: 894, y: -43},
            },
        },
        {
            name: "StyleUsage",
            state: {
                summaryIS: true,
                positionSummaryIS: {x: 156, y: -84},
    
                inlineStyles: true,
                positionInlineStyles: {x: 156, y: -54},
    
                summaryCSSInJS: true,
                positionSummaryCSSInJS: {x: 524, y: -85},
    
                cssInJS: true,
                positionCSSInJS: {x: 524, y: 27},
    
                summaryCSSModules: true,
                positionSummaryCSSModules: {x: 945, y: -83},
    
                cssModules: true,
                positionCSSModules: {x: 945, y: -50},
    
                cssModulesUsage: true,
                positionCSSModulesUsage: {x: 945, y: 96},
    
                summarySF: true,
                positionSummarySF: {x: 1324, y: -83},
    
                separateFile: true,
                positionSeparateFile: {x: 1324, y: -35},
    
                separateFileUsage: true,
                positionSeparateFileUsage: {x: 1324, y: 197},
            },
        },
        {
            name: "ProblemsWithStyles",
            state: {
                summary: true,
                positionSummary: {x: 156, y: -91},
    
                menuPanel: true,
                positionMenuPanel: {x: 156, y: 70},
    
                menuPanelStyles: true,
                positionMenuPanelStyles: {x: 156, y: 298},
            },
        },
        {
            name: "Position",
            state: {
                summaryPositions: true,
                positionSummaryPositions: {x: 156, y: -93},
    
                positions: true,
                positionPositions: {x: 156, y: 49},
    
                summaryTextPositions: true,
                positionSummaryTextPositions: {x: 526, y: -91},
    
                textPositions: true,
                positionTextPositions: {x: 526, y: -23},
    
                summaryWH: true,
                positionSummaryWH: {x: 890, y: -92},
    
                widthHeight: true,
                positionWidthHeight: {x: 890, y: 37},
            },
        },
    ]);

    

    return(
        <PosterMain 
            posterStateArray={posterStateArray} 
            setPosterStateArray ={setPosterStateArray} 
            userId={userId} 
        /> 
    );
};

export default PostersData;