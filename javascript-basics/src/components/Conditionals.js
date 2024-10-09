import React from "react";
import TerminalWindow from "./TerminalWindow";



const Conditionals = () => {

    const IfElceCodeText =`
    let age = 17;

    if(age >= 100) {

        console.log( "You too dead to vote");

    } else if (age >= 18) {

        console.log ("You can vote");

    } else {

        console.log("Too young to vote");

    }
    `
    const TernaryConditionalText=`
    let isMember = true; 
    let fee = isMember ? 2:10; 
    console.log(fee);
    `

    const SwitchCaseText=`
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
    `

    return(
        <>
             <div style={{ display: 'flex', justifyContent: 'center' , flexWrap: 'wrap' , }}>
                <TerminalWindow incomingText={IfElceCodeText} answer={"Too young to vote"}/>
                <TerminalWindow incomingText={TernaryConditionalText} answer={"2"}/>
                <TerminalWindow incomingText={SwitchCaseText} answer={"Starving"}/>
            </div>
            
        </>
    );
};

export default Conditionals;


