import React from "react";
import TerminalWindow from "./TerminalWindow";

const Functions = () => {

   const regularFunction=`
   //Normal function

    function greet(name){
        return "Hello, " + name + "!";
    }

    console.log(greet("Bob"));
   `

   const functionExpression=`
   //Function Expression

    const greetWithFunction = function(name) {
        return "Hello with function, " + name + "!";
    }
    console.log(greetWithFunction("Vitalik"));
   `

    const functionWithParameter=`
    //Function with parameter & return

    function add(a,b) {
        return a + b;
    }
    
    let sum = add(5+6);
    console.log(sum);
    `

    const functionWithArgument=`
    //Function with argument

     function greetWithArgument (name = "guest"){
        return "Hello, " + name + "!";
    }

    console.log(greetWithArgument());
    console.log(greetWithArgument("Tom"));
    `

    const recursiveFunction=`
    // A function that calls itself 

    function factorial(n){
        if(n === 1){
            return 1;
        }
     return n * factorial(n-1);  
    }
    
    console.log(factorial(5));
    `

    const callbackFunction=`
    // A function that calls another function

    function sayHello(){
        console.log("Hello!");
    }

    function callFunction(func){
        func();
    }

    callFunction(sayHello);
    `
    const arrowFunctions=`
    //Arrow Function is short 

    const arrowFunctions = (name) => "Hello with arrow, " + name + "!";
    console.log(arrowFunctions("Andrey"));
    `

    const differenceFunction = `
    //Difference between "Regular Function" and  "Arrow Function "

     function Person(name){
        this.name = name;
        setTimeout(function(){
            console.log(this.name);
        },1000);
    }

     const person = new Person("Alice");

     function Person(name){
     this.name = name;
     setTimeout(()=> {
        console.log(this.name);
     },1000);
    }

     const person = new Person("Alice");
    `
    const arrowFunctionsInReact = `
    const MyButton = () => {

        const handleClick = () =>{
            console.log("Clicked");
        };
      return  <button onClick={handleClick}>Click me!</button>
   };
    `
    const directArrowFunc=`
    const MyComponent = () => {
    return(
        <button onClick={() => console.log("Cliked")}>
            Click me
        </button>
    );
   };
    `
    return(
        <>
            <div style={{ display: 'flex', flexWrap: 'wrap' , justifyContent: 'center' ,  }}>
               <TerminalWindow incomingText={regularFunction} answer="Hello with function, Bob!"/>
               <TerminalWindow incomingText={functionExpression} answer="Hello, Vitalik!"/>
               <TerminalWindow incomingText={functionWithParameter} answer="11"/>
               <TerminalWindow incomingText={functionWithArgument} answer="Hello, Tom! or Hello, guest!"/>
               <TerminalWindow incomingText={recursiveFunction} answer="1 2 6 24 120"/>
               <TerminalWindow incomingText={callbackFunction} answer="Hello!"/>
               <TerminalWindow incomingText={arrowFunctions} answer="Hello with arrow, Andrey!"/>
               <TerminalWindow incomingText={differenceFunction} answer=""/>
               <TerminalWindow incomingText={arrowFunctionsInReact} answer="Clicked"/>
               <TerminalWindow incomingText={directArrowFunc} answer="Clicked"/>
            </div>
        </>
    );
};

export default Functions;