import React from "react";

const Arrays = () =>{

    let numbers = [1,2,3,4,5];
    let Numbers = new Array(1,2,3,4,5);

    let destructuringArray = ["apple",1,2,3,4,"banana"]
    let [first , second] = destructuringArray;
    console.log(first);
    console.log(second);

    let matrix = [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ];
    console.log(matrix[1][2]);
    
    numbers.push(6);
    console.log(numbers);

    Numbers.pop(5);
    console.log(Numbers);

    let fruits = ["apple","banana","orange"];
    fruits.shift();
    console.log(fruits);
   
    fruits.unshift("grape");
    console.log(fruits);

    let Fruits = ["apple","banana","orange","grape"];
    let slicedFruits = Fruits.slice(1,3);
    console.log(slicedFruits)

    //let fruits = ["apple","banana","orange"];
    fruits.splice(1,1,"grape");
    console.log(fruits)

    let arr1 = [1,2,3];
    let arr2 = [4,4,5];
    let merged = arr1.concat(arr2);
    console.log(merged);

    let num = [1,2,3];
    num.forEach(function(num){
        console.log(num*2);
    })

    num.forEach((num)=>{
        console.log(num*2)
    })

    let Num = [1,2,3];
    let doubled = Num.map((num)=>{
        return num * 2;
    });
    console.log(doubled);


    let NUM = [1,2,3,4,5];
    let evenNumbers = NUM.filter((NUM)=>{
        return NUM % 2 === 0;
    });
    console.log(evenNumbers);

    let NUMBERS = [1,2,3,4,5];
    let SUM = NUMBERS.reduce(function(total,num){
        return total + num;
    },0);
    console.log(SUM);


    let FRU = ["apple", "banana", "orange"];
    console.log(FRU.includes("banana"));
    console.log(FRU.includes("grape"));

    let NUMB = [1,2,3,2];
    console.log(NUMB.indexOf(2)); 
    console.log(NUMB.lastIndexOf(2));

    let FRUTS = ["orange" , "apple" , "banana"];
    FRUTS.sort();
    console.log(FRUTS);

    let NUMBE = [10,5,3,12,1];
    NUMBE.sort((a,b)=>{
        return a-b;
    });
    console.log(NUMBE);




    return(
        <div>
            <h1>hello arrays</h1>
        </div>
    );
};

export default Arrays;