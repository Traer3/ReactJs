import React, { useState } from "react";
import AuthorizationFrom from "./AuthorizationFrom";

const LogIn = ({setUserCheck, setUserId}) =>{

    const [login, setLogin] = useState('');
    const [password,setPassword] = useState('');

    const handleLogIn = async (event)=>{
        event.preventDefault()
       
        if(!login || !password){
            alert('Please fill out all fields')
            return;
        }
        
        try {
            
            const response = await fetch('http://192.168.0.254:3001/logIn', { //поменяй ip 
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ login, password }),
            }); 
            
            const data = await response.json();
            alert(data.message);

            if (data.message === "Login successful") {
              localStorage.setItem("userCheck", JSON.stringify(true)); 
              localStorage.setItem("userId", JSON.stringify(data.userId));
                    setUserCheck(true); 
                    setUserId(data.userId);   
            }
        } catch (error) {
            console.error("Login error:", error);
        }
       
       
    };


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