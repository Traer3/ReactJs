import React from "react";
import TerminalWindow from "./TerminalWindow";

const Arrays = () =>{

    const array =`
    //initialization

    let numbers = [1,2,3,4,5];
    let Numbers = new Array(1,2,3,4,5);

    //adding 
    numbers.push(6);
    console.log(numbers);

    //deleting
    Numbers.pop(5);
    console.log(Numbers);
    `
    const destructuringArray =`
    //Destrucrturing arrays 

    let destructuringArray = ["apple",1,2,3,4,"banana"]
    let [first , second] = destructuringArray;
    console.log(first);
    console.log(second);

    //Multidimensional arrays
    let matrix = [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ];
    console.log(matrix[1][2]);
    `

    const arrayShifts=`
    //Deleting and adds first index

    let fruits = ["apple","banana","orange"];
    fruits.shift();
    console.log(fruits);
   
    fruits.unshift("grape");
    console.log(fruits);
    `

    const slicedAndSplicedArrays =`
    //Slicing arrays and leaving desired elements\\ 

    let Fruits = ["apple","banana","orange","grape"];
    let slicedFruits = Fruits.slice(1,3);
    console.log(slicedFruits)

    //Splicing deleting and adding elements\\

    let fruits = ["apple","banana","orange"];
    fruits.splice(1,1,"grape");
    console.log(fruits)
    `
    const mergingArrays=`
    //Megring Arrays in to one 

    let arr1 = [1,2,3];
    let arr2 = [4,4,5];
    let merged = arr1.concat(arr2);
    console.log(merged);
    `
    const arrayForEach=`
    //For each like java =)

    let num = [1,2,3];
    num.forEach(function(num){
        console.log(num*2);
    })

    num.forEach((num)=>{
        console.log(num*2)
    })
    `
    const arrayMap=`
    //Using .map() for each elements

    let Num = [2,4,6];
    let doubled = Num.map((num)=>{
        return num * 2;
    });
    console.log(doubled);
    `
    const filteringArrays=`
    //Filtering arrays outcome data 

    let NUM = [1,2,3,4,5];
    let evenNumbers = NUM.filter((NUM)=>{
        return NUM % 2 === 0;
    });
    console.log(evenNumbers);
    `
    const reduceArrays =`
    //Execute function for each elements in array given one answer

    let NUMBERS = [1,2,3,4,5];
    let SUM = NUMBERS.reduce(function(total,num){
        return total + num;
    },0);
    console.log(SUM);
    `

    const indexManipulation=`
    //Ways of manipulated indexes

    let FRU = ["apple", "banana", "orange"];
    console.log(FRU.includes("banana"));
    console.log(FRU.includes("grape"));

    let NUMB = [1,2,3,2];
    console.log(NUMB.indexOf(2)); 
    console.log(NUMB.lastIndexOf(2));
    `
    const sortingArrays=`
    //Sorting arrays 

    let FRUTS = ["orange" , "apple" , "banana"];
    FRUTS.sort();
    console.log(FRUTS);

    let NUMBE = [10,5,3,12,1];
    NUMBE.sort((a,b)=>{
        return a-b;
    });
    console.log(NUMBE);
    `

    return(
        <div style={{ display: 'flex', flexWrap: 'wrap' , justifyContent: 'center' ,  }}>
               <TerminalWindow incomingText={array} answer="Adding: 1,2,3,4,5,6 & Deleting: 1,2,3,4"/>
               <TerminalWindow incomingText={destructuringArray} answer="apple, 1 & 6"/>
               <TerminalWindow incomingText={arrayShifts} answer="banana, orange  & grape ,banana, orange"/>
               <TerminalWindow incomingText={slicedAndSplicedArrays} answer="banana, orange  & apple ,grape, orange"/>
               <TerminalWindow incomingText={mergingArrays} answer="1,2,3,4,4,5"/>
               <TerminalWindow incomingText={arrayForEach} answer="2,4,6"/>
               <TerminalWindow incomingText={arrayMap} answer="4,8,12"/>
               <TerminalWindow incomingText={filteringArrays} answer="2,4"/>
               <TerminalWindow incomingText={reduceArrays} answer="15"/>
               <TerminalWindow incomingText={indexManipulation} answer="banana is true , grape is faulse & 1 , 3"/>
               <TerminalWindow incomingText={sortingArrays} answer="apple, banana, orange & 1,3,5,10,12"/>
            </div>
    );
};

export default Arrays;