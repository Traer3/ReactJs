import React, {useState } from "react";
import AuthorizationFrom from "./AuthorizationFrom";

const Registration = () =>{

    const [login, setLogin] = useState('');
    const [password,setPassword] = useState('');

    const handleRegistration = (event) =>{
        event.preventDefault();

        if(!login || !password){
            alert('Please fill out all fields')
            return;
        }

        fetch('http://localhost:3001/registration',{
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({login, password}),
        })
            .then((res)=>res.json())
            .then((data)=> alert(data.message))
            .catch((err)=> console.error(err));
    };

    return(
        <AuthorizationFrom
                    handleSubmit={handleRegistration} 
                    handleFirstInput={(e) => setLogin(e.target.value)} 
                    handleSecondInput={(e) => setPassword(e.target.value)} 
                    firstInput={login} 
                    secondInput={password} 
                    type="registration" 
        />
    );
};

export default Registration;