import React from "react";

const DataType = () => {

    let greeting = "Hello, world!";
    console.log(greeting);

    let year = 2024;
    let pi = 3.14;
    console.log(year);
    console.log(pi);

    let isActive = true;
    console.log (typeof isActive);

    let emptyValue = null;
    console.log (typeof emptyValue);

    let notAssigned;
    console.log(typeof notAssigned);

    let bigNumber =  123456789012345678901234567890n;
    console.log( bigNumber)

    return(
        <div>

        </div>
    );
};

export default DataType;