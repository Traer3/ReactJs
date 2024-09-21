import React from "react";



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

    
    return(
        <div>

        </div>
    );
};

export default Conditionals;


