import React, { useState } from "react";
import style from "../css/MenuScreen.module.css"

const Login = ({setUserCheck, setUserId}) =>{

    const [login, setLogin] = useState('');
    const [password,setPassword] = useState('');

    const handleLogin = (event)=>{
        event.preventDefault();

        if(!login || !password){
            alert('Please fill out all fields')
            return;
        }
        
        fetch('http://localhost:3001/login',{
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({login, password}),
        })
            .then((res)=>res.json())
            .then((data) => {
                    alert(data.message);
                    if(data.message === "Login successful"){
                        setUserId(data.userId)
                        setUserCheck(true);
                    }
            })                
            .catch((err)=> console.error(err));
    }


    return(
        <div 
        className={style.LogIn} 
        
    >
        <form  onSubmit={handleLogin} >
            <input 
                type="text" 
                value={login} 
                onChange={(e) => setLogin(e.target.value)} 
                placeholder="login"
            />
            <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
            />
            <button type="submit">login</button>
        </form>

    </div>
    );
};

export default Login;