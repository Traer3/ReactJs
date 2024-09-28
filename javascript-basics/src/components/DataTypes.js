import React from "react";
import ImitationTerminal from "./ImitationTerminal";
import style from "./VariablesStyle.module.css";

const DataType = () => {


    return(
        <>
             
            <div className={style.variablesStyle}>
                <span style={{color:'#2d7ad6'}}>let</span>
                <span style={{color:'#7cdcf0'}}> greeting </span> =
                <span style={{color:'#c3602d'}}> "Hello, world!"</span>;
                <ImitationTerminal incomingText="Hello, world!"/>
             </div>

             <div className={style.variablesStyle}>
                <span style={{color:'#2d7ad6'}}>let</span>
                <span style={{color:'#7cdcf0'}}> year </span> =
                <span style={{color:'#c3602d'}}> 2024</span>;
                <ImitationTerminal incomingText="2024"/>
             </div>

             <div className={style.variablesStyle}>
                <span style={{color:'#2d7ad6'}}>let</span>
                <span style={{color:'#7cdcf0'}}> pi </span> =
                <span style={{color:'#c3602d'}}> 3.14</span>;
                <ImitationTerminal incomingText="3.14"/>
             </div>

             <div className={style.variablesStyle}>
                <span style={{color:'#2d7ad6'}}>let</span>
                <span style={{color:'#7cdcf0'}}> isActive </span> =
                <span style={{color:'#c3602d'}}> true</span>;
                <ImitationTerminal incomingText="true"/>
             </div>
            
             <div className={style.variablesStyle}>
                <span style={{color:'#2d7ad6'}}>let</span>
                <span style={{color:'#7cdcf0'}}> emptyValue </span> =
                <span style={{color:'#c3602d'}}> null</span>;
                <ImitationTerminal incomingText="null"/>
             </div>

             <div className={style.variablesStyle}>
                <span style={{color:'#2d7ad6'}}>let</span>
                <span style={{color:'#7cdcf0'}}> notAssigned </span> =
                <span style={{color:'#c3602d'}}> undefined</span>;
                <ImitationTerminal incomingText="undefined"/>
             </div>

             <div className={style.variablesStyle}>
                <span style={{color:'#2d7ad6'}}>let</span>
                <span style={{color:'#7cdcf0'}}> bigNumber </span> =
                <span style={{color:'#c3602d'}}> 123456789012345678901234567890n</span>;
                <ImitationTerminal incomingText="123456789012345678901234567890n"/>
             </div>

        </>
    );
};

export default DataType;