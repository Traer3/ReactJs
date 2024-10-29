import React from "react";
import FunctionalGreeting from "./Functional&Class/FunctionalGreeting";
import ClassGreeting from "./Functional&Class/ClassGreeting";

const TestField = () => {

    return(
        <div>
            <FunctionalGreeting name="Bob"/>
            <ClassGreeting name= "Jack"/>
        </div>
    );
};

export default TestField;