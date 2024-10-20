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

let chengeTexBtn = document.getElementById("changeTextBtn");
let text = document.getElementById("text");
chengeTexBtn.addEventListener("click", ()=>{
    text.textContent = "The text has been DEcunts";
})


let pervetTag = document.getElementById("mouseOver");
let clounTag = document.getElementById("clounTag");
pervetTag.addEventListener("mouseover", ()=>{
    clounTag.style.backgroundColor = "red";
    clounTag.textContent = "DONT TOUCH HIM PERV";
});
pervetTag.addEventListener("mouseout", function(){
    clounTag.style.backgroundColor = "green";
    clounTag.textContent = "good";
});



let nameInput = document.getElementById("nameInput");
let greeting = document.getElementById("greeting");
nameInput.addEventListener("input", ()=>{
    let name = nameInput.value;
    greeting.textContent = `Hello, ${name}!`;
})


document.addEventListener("keydown",function(event){
    let keyDisplay = document.getElementById("keyDisplay");
    keyDisplay.textContent = `You pressed : ${event.key}`; 
})


let clickBtn = document.getElementById("clickBtn");
let message2 = document.getElementById("message2");
function handleClick(){
    message2.textContent = "Button was clicked";
}
clickBtn.addEventListener("click", handleClick);
document.getElementById("removeBtn").addEventListener("click",()=>{
    clickBtn.removeEventListener("click",handleClick);
    message2.textContent = "Click handler removed";
}); 


let loginFrom = document.getElementById("loginFrom");
let formMessage = document.getElementById("formMessage");

loginFrom.addEventListener("submit", function(event){
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    formMessage.textContent = `Welcome, ${username}! you have strong password ${password}`
})


const DomTester = () => {
    return(
        <div>
               
        </div>
    );
};

export default DomTester;