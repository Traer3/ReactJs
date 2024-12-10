import React, { useState } from "react";
import { Document, Page } from "@react-pdf/renderer";

import PDFtest from "./TestTestMe.pdf"
const PDFViewer = ({fileUrl}) =>{

    return(
        <iframe 
            src={PDFtest}
            style={{width:'100%', height:'500px', border:'none'}}
            title="PDF Viewer"
        >

        </iframe>
    );
};

export default PDFViewer;