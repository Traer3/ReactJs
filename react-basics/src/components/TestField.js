import React from "react";
import FunctionalGreeting from "./Functional&Class/FunctionalGreeting";
import ClassGreeting from "./Functional&Class/ClassGreeting";
import UserCard from "./Props&State/UserCard";
import Counter from "./Props&State/Counter";
import ExampleComponent from "./LifeCycle&Hooks/ExampleComponent";
import UseStateUsage from "./LifeCycle&Hooks/UseStateUsage";
import UseEffectUsage from "./LifeCycle&Hooks/UseEffectUsage";
import UsingOnClick from "./EventHandler/UsingOnClick";
import MouseTracker from "./EventHandler/MouseTracker";
const TestField = () => {

    return(
        <div>
            <FunctionalGreeting name="Bob"/>
            <ClassGreeting name= "Jack"/>
            <UserCard name="Slav" age={23} country="East Europe"/>
            <Counter/>
            <ExampleComponent/>
            <UseStateUsage/>
            <UseEffectUsage/>
            <UsingOnClick/>
            <MouseTracker/>
            
        </div>
    );
};

export default TestField;