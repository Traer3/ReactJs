import React from "react";
import TerminalWindow from "./TerminalWindow";


const Cycles = () => {


    

    const  CycleForText =`
    for (let i = 0; i < 5; i++){
        console.log (i);
    }
    `

    const  CycleWhileText =`
    let i = 0;
    while (i < 5) {
        console.log  (i);
        i++;
    }
    `
    

    const  CycleDoWhileText =`
    let j = 5;
    do {
        console.log (j);
        j++;
    } while (j < 5);
    `

    return(
        <div style={{ display: 'flex', flexWrap: 'wrap' , justifyContent: 'center' , }}>
            <TerminalWindow incomingText={CycleForText} answer={"1, 2, 3, 4, 5"}/>
            <TerminalWindow incomingText={CycleWhileText} answer={" 1, 2, 3, 4, 5"}/>
            <TerminalWindow incomingText={CycleDoWhileText} answer={" 1, 2, 3, 4, 5"}/>
        </div>
    );
};

export default  Cycles;