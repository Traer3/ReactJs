import React from "react";

let className = document.getElementsByClassName("text");
console.log(className);

let tagName = document.getElementsByTagName("p")
console.log(tagName);

let container = document.querySelector(".container p");
console.log(container);

let querySelectorAll = document.querySelectorAll(".text");
console.log(querySelectorAll);

const DomTester = () => {
    return(
        <div>

        </div>
    );
};

export default DomTester;