import React from "react";


const Cycles = () => {


    for (let i = 0; i < 5; i++){
        console.log ("Iteration number " + i);
    }

    let i = 0;
    while (i < 5) {
        console.log  ("Iteration numbers " + i);
        i++;
    }

    let j = 5;
    do {
        console.log ("Iteration numbers " + j);
        j++;
    } while (i < 5);

    


    return(
        <div>

        </div>
    );
};

export default  Cycles;