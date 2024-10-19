import React from "react";

let className = document.getElementsByClassName("text");
console.log(className);

let tagName = document.getElementsByTagName("p")
console.log(tagName);

let container = document.querySelector(".container p");
console.log(container);

let querySelectorAll = document.querySelectorAll(".text");
console.log(querySelectorAll);

let message = document.getElementById("message");
message.textContent= "Hello , WORLD";

let content = document.getElementById("content");
content.innerHTML="<p> New oreder with <strong>HTML</strong></p>"

let image = document.getElementById("image");
image.setAttribute("src", "new-image.jpg")

let box = document.getElementById("box");
box.style.backgroundColor = "blue";


let container2 = document.getElementById("container 2");
container2.classList.add("highlight");
container2.classList.remove("box");
container2.classList.toggle("active");

let newDiv = document.createElement("div");
newDiv.textContent = "Newlu added content";

container.appendChild(newDiv);

let element = document.getElementById("message");
element.remove();

let list = document.getElementById("list")
let addItemBtn = document.getElementById("addItemBtn");
addItemBtn.addEventListener("click", function(){
    let newItem = document.createElement("li");
    newItem.textContent = `Item ${list.children.length + 1}`;
    list.appendChild(newItem);
})

const DomTester = () => {
    return(
        <div>

        </div>
    );
};

export default DomTester;