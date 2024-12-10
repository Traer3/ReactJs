import React from "react";
import TerminalWindow from "./TerminalWindow";
import SummaryWindow from "./SummaryWindow";
import CustomPDFViewer from "../testing/CustomPDFViewer";
//import MicrosoftWordSimmary from "../testing/MicrosoftWordSimmary";
//import MsWordReader from "../testing/MsWordReader";
//import PDFViewer from "../testing/PDFViewer";
//import TestingPdf from "../testing/TestTestMe.pdf" <CustomPDFViewer fileUrl={TestingPdf}/>

const WorkSpace = () => {
    return(
        <div>
            <TerminalWindow/>
            <SummaryWindow/>
            
            
        </div>
    );
};

export default WorkSpace;