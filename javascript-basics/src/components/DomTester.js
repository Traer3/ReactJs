import React from "react";
import TerminalWindow from "./TerminalWindow";

const methodElementsByClassName = `
//Using method getElementsByClassName 
  to hook data from tags with class name =)

index.html
   <p class="text">Paragraph</p>
   <p class="text">Paragraph 2</p>


let className = document.getElementsByClassName("text");
console.log(className);
`

const tagName = `
//Finding data by hunting tag name 

index.html
    <p class="help"></p>
    <p class="tf? is DOM"></p>

let tagName = document.getElementsByTagName("p")
console.log(tagName);
`

const querySelector =`
//Returning frist container in search query

index.html
    <div class="container">
      <p>First container</p>
    </div>


let container = document.querySelector(".container p");
console.log(container);
`

const querySelectorAll =`
//Returning all html tag in search query 

let querySelectorAll = document.querySelectorAll(".text");
console.log(querySelectorAll);
`

const textContent =`
//Manipulating text content in tags 

index.html
<p id="message">Hello, world</p>

let message = document.getElementById("message");
message.textContent= "Hello , WORLD";
`

const innerHTML =`
//Changing original html conten usign innerHTML
index.html

<div id="content">Original content</div>

let content = document.getElementById("content");
content.innerHTML="<p> New oreder with <strong>HTML</strong></p>"
`

const setAttribute =`
//Changing html tag (src , href , class ) 
info using setAttribute

index.html 
<div id="image" src="kys.jpg" alt="do it"></div>

let image = document.getElementById("image");
image.setAttribute("src", "new-image.jpg")
`

const styleChanger =`
//Changing style in HTML tags 

index.html 
<div id="box" style="width: 100px; height: 100px; background-color: red;"></div>

let box = document.getElementById("box");
box.style.backgroundColor = "blue";
`

const classManipulation = `
//Adding or deleting class 

index.html
 <div id="container 2" class="box"></div>
 
let container2 = document.getElementById("container 2");
container2.classList.add("highlight");
container2.classList.remove("box");
container2.classList.toggle("active");
`

const createElement =`
//Creating tags , and adding tags 

index.html 
    <div class="container">
      <p>First container
      <div>Newlu added content</div>
      </p>
    </div>

let newDiv = document.createElement("div");
newDiv.textContent = "Newlu added content";

container.appendChild(newDiv);
`
const removingTag=`
//Removing tags  

let element = document.getElementById("message");
element.remove();
`

const example=`
//Example on how to create dynamic list 

index.html
    <ul id="list">
      <li>Item 1</li>
      <li>Item 2</li>
    </ul>
    <button id="addItemBtn">Add item</button>

let list = document.getElementById("list")
let addItemBtn = document.getElementById("addItemBtn");
addItemBtn.addEventListener("click", function(){
    let newItem = document.createElement("li");
    newItem.textContent = Item $list.children.length + 1};
    list.appendChild(newItem);
})
`

const addEventListenerClick=`
//Event listener for click 

index.html
    <button id="changeTextBtn">Click me</button>
    <p id="text">This is the cunt text</p>

let chengeTexBtn = document.getElementById("changeTextBtn");
let text = document.getElementById("text");
chengeTexBtn.addEventListener("click", ()=>{
    text.textContent = "The text has been DEcunts";
})
`

const addEventListenerMouse=`
//Event listener for mouseover and mouseout 

index.html 
    <p id="mouseOver">Touch me!</p>
    <p id="clounTag"></p>

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
`
const inputEvent =`
//Add event for inputing text 

index.html 
    <input type="text" id="nameInput" placeholder="Type your data">
    <p id="greeting"></p>

let nameInput = document.getElementById("nameInput");
let greeting = document.getElementById("greeting");
nameInput.addEventListener("input", ()=>{
    let name = nameInput.value;
    greeting.textContent = Hello, {name}!;
})
`

const keydownEvent=`
//Reading keyboardData 

index.html
    <p>Press any key on your keyboard</p>
    <p id="keyDisplay"></p>

document.addEventListener("keydown",function(event){
    let keyDisplay = document.getElementById("keyDisplay");
    keyDisplay.textContent = You pressed : {event.key}; 
})
`
const removeEventListener=`
//Removing Event Listener

index.html 
    <button id="clickBtn">ClickMEcunt</button>
    <button id="removeBtn">Remove Click Handler</button>
    <p id="message2"></p>

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
`

const fromExample=`
//Using event litener on forms 

index.html
    <form id="loginFrom">
        <input type="text" id="username" placeholder="UserName">
        <input type="password" id="password" placeholder="Password">
        <button type="submit">Login</button>
    </form>
    <p id="formMessage"></p>

let loginFrom = document.getElementById("loginFrom");
let formMessage = document.getElementById("formMessage");

loginFrom.addEventListener("submit", function(event){
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    formMessage.textContent = Welcome, {username}! you have strong password {password}
`
const DomTester = () => {
    return(
        <div style={{ display: 'flex', flexWrap: 'wrap' , justifyContent: 'center' ,  }}>
               <TerminalWindow incomingText={methodElementsByClassName} answer="Paragraph & Paragraph 2"/>
               <TerminalWindow incomingText={tagName} answer="help & tf? is DOM"/>
               <TerminalWindow incomingText={querySelector} answer="First container"/>
               <TerminalWindow incomingText={querySelectorAll} answer="Paragraph & Paragraph 2"/>
               <TerminalWindow incomingText={textContent} answer="Hello, world"/>
               <TerminalWindow incomingText={innerHTML} answer="New oreder with HTML"/>
               <TerminalWindow incomingText={setAttribute} answer="new-image.jpg"/>
               <TerminalWindow incomingText={styleChanger} answer="BOX but its blue =)"/>
               <TerminalWindow incomingText={classManipulation} answer="container 2 class box"/>
               <TerminalWindow incomingText={createElement} answer="Newlu added content"/>
               <TerminalWindow incomingText={removingTag} answer="no more tag with class name message"/>
               <TerminalWindow incomingText={example} answer="created list "/>
               <TerminalWindow incomingText={addEventListenerClick} answer="The text has been DEcunts"/>
               <TerminalWindow incomingText={addEventListenerMouse} answer="clounTag"/>
               <TerminalWindow incomingText={inputEvent} answer="Hello, keyboard"/>
               <TerminalWindow incomingText={keydownEvent} answer="Press any key on your keyboard"/>
               <TerminalWindow incomingText={removeEventListener} answer="Click handler removed"/>
               <TerminalWindow incomingText={fromExample} answer="Welcome, {username}! you have strong password {password}"/>
            </div>
    );
};

export default DomTester;
