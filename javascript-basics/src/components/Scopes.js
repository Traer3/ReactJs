import React from "react";


let globalVar = "It's global scope"

function showGlobal(){
    console.log(globalVar);;
}

showGlobal();
console.log(globalVar)


const myArrowFunc=()=>{
    var functionVar= "It's  function scope";
    console.log(functionVar);
}
myArrowFunc();


if(true){
    let blockVar = "It's variable for block scope"
    console.log(blockVar);
}


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



const Scopes = () =>{
    return(
        <div>
            <h1>Hello scopes!</h1>
        </div>
    );
};

export default Scopes


