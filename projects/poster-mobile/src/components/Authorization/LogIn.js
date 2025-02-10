import React, { useState } from "react";
import AuthorizationFrom from "./AuthorizationFrom";

const LogIn = ({setUserCheck, setUserId}) =>{

    const [login, setLogin] = useState('');
    const [password,setPassword] = useState('');

    const handleLogIn = (event)=>{
        event.preventDefault();

        if(!login || !password){
            alert('Please fill out all fields')
            return;
        }
        
        fetch('http://localhost:3001/logIn',{
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({login, password}),
        })
            .then((res)=>res.json())
            .then((data) => {
                    alert(data.message);
                    if(data.message === "Login successful"){
                        localStorage.setItem("userCheck", "true");
                        setUserCheck(true);
                        setUserId(data.userId) 
                    }
            })                
            .catch((err)=> console.error(err));
    }


    return(
                <AuthorizationFrom
                    handleSubmit={handleLogIn}
                    handleFirstInput={(e) => setLogin(e.target.value)}
                    handleSecondInput={(e) => setPassword(e.target.value)}
                    firstInput={login}
                    secondInput={password}
                    type="logIn" 
                />
    );
};

export default LogIn;