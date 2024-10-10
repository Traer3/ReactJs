import React from "react";
import TerminalWindow from "./TerminalWindow";

const globalVar =`
//Global scope variable 

let globalVar = "It's global scope"

function showGlobal(){
    console.log(globalVar);;
}

showGlobal();
console.log(globalVar)
`

const functionScope=`
// Functional variable 

const myArrowFunc=()=>{
    var functionVar= "It's  function scope";
    console.log(functionVar);
}
myArrowFunc();

//console.log(functionVar) ERROR!
`
const blockScope=`
//Bloc variabl

if(true){
    let blockVar = "It's variable for block scope"
    console.log(blockVar);
}

//console.log(blockVar) ERROR!
`
const outerVariable=`
// How Outer Variable works 

let outerVar = "Outer Variable"
function outerFunction() {
    let innerVar = "Inner Variable"
    function innerFunction(){
        console.log(outerVar);
        console.log(innerVar);
    }
    innerFunction();
}
outerFunction();

`

const Scopes = () =>{
    return(
        <div style={{ display: 'flex', flexWrap: 'wrap' , justifyContent: 'center' ,  }}>
               <TerminalWindow incomingText={globalVar} answer="It's global scope"/>
               <TerminalWindow incomingText={functionScope} answer="It's  function scope"/>
               <TerminalWindow incomingText={blockScope} answer="It's variable for block scope"/>
               <TerminalWindow incomingText={outerVariable} answer="Outer Variable & Inner Variable"/>
            </div>
    );
};

export default Scopes











