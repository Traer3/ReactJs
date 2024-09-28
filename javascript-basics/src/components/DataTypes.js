import React from "react";
import ImitationTerminal from "./ImitationTerminal";
import style from "./VariablesStyle.module.css";

const DataType = () => {


    return(
        <>
             
            <div className={style.variablesStyle}>
                <span className={style.variableColor}>let</span>
                <span className={style.variableName}> greeting </span> =
                <span className={style.variableData}> "Hello, world!"</span>;
                <ImitationTerminal incomingText="Hello, world!"/>
             </div>

             <div className={style.variablesStyle}>
                <span className={style.variableColor}>let</span>
                <span className={style.variableName}> year </span> =
                <span className={style.variableData}> 2024</span>;
                <ImitationTerminal incomingText="2024"/>
             </div>

             <div className={style.variablesStyle}>
                <span className={style.variableColor}>let</span>
                <span className={style.variableName}> pi </span> =
                <span className={style.variableData}> 3.14</span>;
                <ImitationTerminal incomingText="3.14"/>
             </div>

             <div className={style.variablesStyle}>
                <span className={style.variableColor}>let</span>
                <span className={style.variableName}> isActive </span> =
                <span className={style.variableData}> true</span>;
                <ImitationTerminal incomingText="true"/>
             </div>
            
             <div className={style.variablesStyle}>
                <span className={style.variableColor}>let</span>
                <span className={style.variableName}> emptyValue </span> =
                <span className={style.variableData}> null</span>;
                <ImitationTerminal incomingText="null"/>
             </div>

             <div className={style.variablesStyle}>
                <span className={style.variableColor}>let</span>
                <span className={style.variableName}> notAssigned </span> =
                <span className={style.variableData}> undefined</span>;
                <ImitationTerminal incomingText="undefined"/>
             </div>

             <div className={style.variablesStyle}>
                <span className={style.variableColor}>let</span>
                <span className={style.variableName}> bigNumber </span> =
                <span className={style.variableData}> 123456789012345678901234567890n</span>;
                <ImitationTerminal incomingText="123456789012345678901234567890n"/>
             </div>

        </>
    );
};

export default DataType;