import React from "react";
import ImitationTerminal from "./ImitationTerminal";
import style from "./VariablesStyle.module.css";
import TerminalText from "./TerminalText";


const Conditionals = () => {

    let age = 17;

    if(age >= 100) {
        console.log( "You too dead to vote");
    } else if (age >= 18) {
        console.log ("You can vote");
    } else {
        console.log("Too young to vote");
    }




    let isMember = true; 
    let fee = isMember ? 2:10; 
    console.log(fee);


    let state = 3;
    switch (state){
        case 1:
            console.log("Hungry");
            break;
        case 2:
            console.log("Full");
            break;
        case 3: 
            console.log("Starving");
            break;
        default:
            console.log("Tired");
    }



    /////////////

    //let age = 17;

    if(age >= 100) {
        console.log( "You too dead to vote");
    } else if (age >= 18) {
        console.log ("You can vote");
    } else {
        console.log("Too young to vote");
    }

    const code = ""
    
    return(
        <>
            <div className={style.variablesStyle}>
                <span className={style.variableColor}>let</span>
                <span className={style.variableName}> age </span> =
                <span className={style.variableData}> 17</span>;
                <br/>
                <span className={style.variableIf}>if</span>
                <span className={style.variableO}>{'('}</span>
                <span className={style.variableName}>age</span>
                <span >{'>'}</span>=
                <span className={style.variableData}> 100</span>
                <span className={style.variableO}>{')'}</span>
                <span className={style.variableO}> {'{'}</span>
                <br/>
                <span className={style.variableName}>console</span>
                <span className={style.variableData}>.log</span>
                <span className={style.variableO}>{'('}</span>
                <span className={style.variableData}>"You too dead to vote"</span>
                <span className={style.variableData}> 100</span>
                <span className={style.variableO}>{')'}</span>;
                <br/>
                <span className={style.variableO}> {'}'}</span>
                <ImitationTerminal incomingText="Too young to vote"/>
             </div>

        </>
    );
};

export default Conditionals;


