import React, { useEffect, useState } from "react";
import * as pdfjsLib from "pdfjs-dist";

pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;


const CustomPDFViewer = ({fileUrl}) => {
    const [content, setContent] = useState([]);

    useEffect(()=>{
        const loadPDF = async () =>{
            const loadingTask = pdfjsLib.getDocument(fileUrl);
            const pdf = await loadingTask.promise;

            const pagesContent = [];
            for(let pageNum = 1; pageNum <= pdf.numPages; pageNum++){
                const page = await pdf.getPage(pageNum);
                const textContent = await page.getTextContent();

                const pageText = textContent.items.map((item)=> ({
                    text: item.str,
                    transform: item.transform,
                    fontName: item.fontName,
                }));
                pagesContent.push(pageText);
            }
            setContent(pagesContent);
        };
        loadPDF();
    },[fileUrl]);

    return(
        <div >
            {content.map((page,pageIndex)=>(
                <div key={pageIndex} style={{marginBottom:'20px'}}>
                    {page.map((item,itemIndex)=>(
                        <span key={itemIndex}
                        style={{
                            color:'white'
                        }}
                        >
                            {item.text}
                        </span>
                    ))}
                    
                </div>
            ))}
        </div>
    );
};

export default CustomPDFViewer;