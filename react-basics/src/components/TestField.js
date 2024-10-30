import React from "react";
import FunctionalGreeting from "./Functional&Class/FunctionalGreeting";
import ClassGreeting from "./Functional&Class/ClassGreeting";
import UserCard from "./Props&State/UserCard";
import Counter from "./Props&State/Counter";

const TestField = () => {

    return(
        <div>
            <FunctionalGreeting name="Bob"/>
            <ClassGreeting name= "Jack"/>
            <UserCard name="Slav" age={23} country="East Europe"/>
            <Counter/>
        </div>
    );
};

export default TestField;