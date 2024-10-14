import React from "react";
import TerminalWindow from "./TerminalWindow";

const Objects = ()=>{

    const objectCreation=`
    //Tow ways to creat object

     let car = {
        brand: "Totoya",
        model: "Camry",
        year: 2020
    }

    
    let bibika = new Object();
    bibika.brand = "Totoya";
    bibika.model = "Camry";
    bibika.year = 2020;
    `

    const waysToReadData=`
    //To way to read data from object

    let book = {
        title: "Harry Pyk",
        author: "Stalin",
        year: 9/11,
    };

    console.log(book.title);
    console.log(book["author"]);
    `

    const editObject = `
    //You can edit object without method

    let user = {
        name:"Alice",
        age:"25",
    }

    user.age = 26;
    user.email = "alice@myass.com";

    console.log(user.age);
    console.log(user.email);
    `

    const deletingFromObject=`
    // Deletion from object 

    let balbes = {
        name: "Balbesik",
        age: "43",
        email: "balbesBalbesovich@ya.com"
    };
    
    delete balbes.email;

    console.log(balbes);
    `

    const methodInObject = `
    //Using method in object 

    let calculator = {
        num1: 10,
        num2: 20,
        sum: function(){
            return this.num1 + this.num2;
        }
    };

    console.log(calculator.sum());
    `

    const detectingParameterInObject=`
    // using "in" to detect parameter in object

     let user1 = {
        name: "not Alice",
        age: "26"
    };

    console.log("name" in user1);
    console.log("email" in user1);
    `
    const  forIn=`
    //Read all object 

    let person = {
        name: "John",
        age: 30,
        country: "USA",
    };

    for(let key in person){
        console.log(key + ": " + person[key])
    }
    `
    const threeMethodsForObject=`
    //Read  BIGDATA  

    let human = {
        name: "Man",
        age: "18",
        country: "USA"
    };

    console.log(Object.keys(human));
    console.log(Object.values(human));
    console.log(Object.entries(human));
    `

    const objectWithArrays=`
    //Object with arrays

    let student = {
        name: "Bob",
        grades: [90,12,12]
    };
    console.log(student.grades[1]);
    `

    const objectWithinObject=`
    //Looks its like java )

    let employee = {
        name: "Jane",
        position:{
            title: "Manager",
            department: "Sales",
        }
    };

    console.log(employee.position.title);
    `

    const copyingBehavior=`
    //Name has changed

    let original = {name: "John"};
    let copy = original; 

    copy.name = "Alice";
    console.log(original.name); //Alice
    `

    const copyingBehavior2 =`
    //Name hasn't changed 

    let original1 = {name: "John"};
    let copy1 = Object.assign({},original1)

    copy1.name = "Alice";
    console.log(original1.name); 
    `

    const usingThreeDots =`
    // almighty three dots 

    let original2 = {name: "John"};
    let copy2 = {...original2};

    copy2.name = "Alice";
    console.log(original2.name);
    `



    return(<div>
        <div style={{ display: 'flex', flexWrap: 'wrap' , justifyContent: 'center' ,  }}>
               <TerminalWindow incomingText={objectCreation} answer="Totoya Camry 2020"/>
               <TerminalWindow incomingText={waysToReadData} answer="Harry Pyk ; Stalin"/>
               <TerminalWindow incomingText={editObject} answer="26 ; alice@myass.com"/>
               <TerminalWindow incomingText={deletingFromObject} answer="Balbesik ; 43"/>
               <TerminalWindow incomingText={methodInObject} answer="30"/>
               <TerminalWindow incomingText={detectingParameterInObject} answer="not Alice"/>
               <TerminalWindow incomingText={forIn} answer="name: John, age: 30, country: USA"/>
               <TerminalWindow incomingText={threeMethodsForObject} answer="name, age, country; Man,18,USA,; name:Man,age:18,country:USA"/>
               <TerminalWindow incomingText={objectWithArrays} answer="12"/>
               <TerminalWindow incomingText={objectWithinObject} answer="Manager"/>
               <TerminalWindow incomingText={copyingBehavior} answer="Alice"/>
               <TerminalWindow incomingText={copyingBehavior2} answer="John"/>
               <TerminalWindow incomingText={usingThreeDots} answer="John"/>
            </div>
    </div>
    );
   
};

export default Objects;