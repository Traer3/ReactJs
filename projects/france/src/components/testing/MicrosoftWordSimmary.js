import React, { useState } from "react";
import mammoth from "mammoth";

const MicrosoftWordSimmary = () =>{
    const [content, setContent] = useState('');

    const hadleFileUpload = async (event) =>{
        const file = event.target.files[0];
        if(file){
            const reader = new FileReader();

            reader.onload = async (e) => {
                const arrayBuffer = e.target.result;
                try{
                    const result = await mammoth.convertToHtml({arrayBuffer});
                    setContent(result.value);
                }catch(err){
                    console.error('I cant read shit', err);
                }
            };
            reader.readAsArrayBuffer(file);
        }
    };

    return(
        <div>
            <input type="file" accept=".docx" onChange={hadleFileUpload}/>
            <div style={{
                border: '1px solid #ccc',
                padding:'10px',
                marginTop:'20px',
                background:'#f9f9f9'

            }}
            dangerouslySetInnerHTML={{ __html: content}}
            >
            
            

            </div>
        </div>
    );
};

export default MicrosoftWordSimmary;