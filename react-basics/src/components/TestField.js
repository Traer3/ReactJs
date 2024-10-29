import React from "react";
import FunctionalGreeting from "./Functional&Class/FunctionalGreeting";
import ClassGreeting from "./Functional&Class/ClassGreeting";

const TestField = () => {

    return(
        <div>
            <FunctionalGreeting name="cunt"/>
            <ClassGreeting name= "boo"/>
        </div>
    );
};

export default TestField;