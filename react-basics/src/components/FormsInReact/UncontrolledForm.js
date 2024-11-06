import React, { useRef } from "react";

const UncontrolledForm = () =>{
    const emailRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Submitted email: ${emailRef.current.value}`);
    };


    return(
        <form onSubmit={handleSubmit}>
            <label>
                email:
                <input type="email" ref={emailRef}/>
            </label>
            <button type="submit">submit</button>
        </form>
    );
};

export default UncontrolledForm;


