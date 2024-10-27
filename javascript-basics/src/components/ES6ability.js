import React from "react";
import UserCard from "./ES6folder/UserCard";
import Greeting from "./ES6folder/Greeting";
import { add, subtract } from "./ES6folder/Addition";

const ES6ability = ()=>{

    const userInfo = {name: "Slav", hobby: "alcoholism", country: "Ukraine"}
    return(
        <div>
            <UserCard user={userInfo}/>
            <Greeting name={"Dima"}/>
            <p>Addition: {add(5, 3)}</p>
            <p>Subtraction: {subtract(5, 3)}</p>
        </div>
    );
};

export default ES6ability;

