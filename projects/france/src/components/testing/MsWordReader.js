import React, { useState } from "react";
import JSZip from "jszip";
import Docxtemplater from "docxtemplater";

const MsWordReader = () => {
    const [content, setContent] = useState("");

    const handleFileUpload  = async (event) =>{
        const file = event.target.files[0];
        if(file){
            const reader = new FileReader();

            reader.onload = async (e) =>{
                const arrayBuffer = e.target.result;

                try{
                    const zip = new JSZip();
                    const doc = await zip.loadAsync(arrayBuffer);

                    const docx = new Docxtemplater().loadZip(doc);

                    const text = docx.getFullText();
                    setContent(text);
                } catch(error){
                    console.error("how to read files",error);
                }
            };
            reader.readAsArrayBuffer(file);
        }
    };
    return(
        <div>
            <input type="file" accept=".docx" onChange={handleFileUpload }/>

            <div style={{
                border:'1px solid #ccc',
                padding:'10px',
                marginTop:'20px',
                background:'#f9f9f9',
                whiteSpace:'pre-wrap',
            }}
            >
                {content}
            </div>
        </div>
    );
};

export default MsWordReader;