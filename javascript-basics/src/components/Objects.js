import React from "react";

const Objects = ()=>{


    let car = {
        brand: "Totoya",
        model: "Camry",
        year: 2020
    }

    
    let bibika = new Object();
    bibika.brand = "Totoya";
    bibika.model = "Camry";
    bibika.year = 2020;

   
    let book = {
        title: "Harry Pyk",
        author: "Stalin",
        year: 9/11,
    };

    console.log(book.title);
    console.log(book["author"]);

    let user = {
        name:"Alice",
        age:"25",
    }

    user.age = 26;
    user.email = "alice@myass.com";

    console.log(user.age);
    console.log(user.email);

    let balbes = {
        name: "Balbesik",
        age: "43",
        email: "balbesBalbesovich@ya.com"
    };
    
    delete balbes.email;

    console.log(balbes);

    let calculator = {
        num1: 10,
        num2: 20,
        sum: function(){
            return this.num1 + this.num2;
        }
    };

    console.log(calculator.sum());

    let user1 = {
        name: "not Alice",
        age: "26"
    };

    console.log("name" in user1);
    console.log("email" in user1);


    let person = {
        name: "John",
        age: 30,
        country: "USA",
    };

    for(let key in person){
        console.log(key + ": " + person[key])
    }

    let human = {
        name: "Man",
        age: "18",
        country: "USA"
    };

    console.log(Object.keys(human));
    console.log(Object.values(human));
    console.log(Object.entries(human));


    let student = {
        name: "Bob",
        grades: [90,12,12]
    };
    console.log(student.grades[1]);

    let employee = {
        name: "Jane",
        position:{
            title: "Manager",
            department: "Sales",
        }
    };

    console.log(employee.position.title);

    let original = {name: "John"};
    let copy = original; 

    copy.name = "Alice";
    console.log(original.name); //Alice

    

    console.log(employee.position.title);

    let original1 = {name: "John"};
    let copy1 = Object.assign({},original1)

    copy1.name = "Alice";
    console.log(original1.name); //John

    let original2 = {name: "John"};
    let copy2 = {...original2};

    copy2.name = "Alice";
    console.log(original2.name);



    return(<div>
        <h1>tf is object</h1>
    </div>
    );
};

export default Objects;