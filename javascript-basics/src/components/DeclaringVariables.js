import React from "react";
import ImitationTerminal from "./ImitationTerminal";
import style from "./VariablesStyle.module.css";

const DeclaringVariables = () => {


   
    return(
    <>  
        <div className={style.variablesStyle}>
            <span style={{color:'#2d7ad6'}}>var </span>
            <span style={{color:'#7cdcf0'}}> name </span> = 
            <span style={{color:'#c3602d'}} > "John" </span> ;
             <br/>
            <ImitationTerminal incomingText="John"/>   
        </div>

        <div className={style.variablesStyle}>
            <span style={{color:'#2d7ad6'}}>let </span>
            <span style={{color:'#7cdcf0'}}> age </span> = 
            <span style={{color:'#c3602d'}} > 25 </span> ;
             <br/>
            <ImitationTerminal incomingText="25"/>    
        </div>

        <div className={style.variablesStyle}>
            <span style={{color:'#2d7ad6'}}>const </span>
            <span style={{color:'#7cdcf0'}}> country </span> = 
            <span style={{color:'#c3602d'}} > USA </span> ;
             <br/>
            <ImitationTerminal incomingText="USA"/>
        </div>
    </>
    );
};

export default DeclaringVariables;