import React, { useState } from "react";

const ControlledComponents = () => {
    const [name, setName] = useState("");

    const handleChange = (event) =>{
        setName(event.target.value);
    };

    const handleSubmit = (event) =>{
        event.preventDefault();
        alert(`Submitted name: ${name}`);
    };


    return(
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={handleChange}/>
            </label>
            <button type="submit">submit</button>
        </form>
    );
};

export default ControlledComponents;

