import React from "react";
import ImitationTerminal from "./ImitationTerminal";
import style from "./VariablesStyle.module.css";

const DeclaringVariables = () => {


   
    return(
    <>  
        <div className={style.variablesStyle}>
            <span className={style.variableColor}>var </span>
            <span className={style.variableName}> name </span> = 
            <span className={style.variableData}> "John" </span> ;
             <br/>
            <ImitationTerminal incomingText="John"/>   
        </div>

        <div className={style.variablesStyle}>
            <span className={style.variableColor}>let </span>
            <span className={style.variableName}> age </span> = 
            <span className={style.variableData}> 25 </span> ;
             <br/>
            <ImitationTerminal incomingText="25"/>    
        </div>

        <div className={style.variablesStyle}>
            <span className={style.variableColor}>const </span>
            <span className={style.variableName}> country </span> = 
            <span className={style.variableData}> USA </span> ;
             <br/>
            <ImitationTerminal incomingText="USA"/>
        </div>
    </>
    );
};

export default DeclaringVariables;