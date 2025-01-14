import React, {useState } from "react";
import style from "../css/MenuScreen.module.css"

const Joining = () => {

    const [login, setLogin] = useState('');
    const [password,setPassword] = useState('');

    const handleRegister = (event) =>{
        event.preventDefault();

        if(!login || !password){
            alert('Please fill out all fields')
            return;
        }

        fetch('http://localhost:3001/register',{
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({login, password}),
        })
            .then((res)=>res.json())
            .then((data)=> alert(data.message))
            .catch((err)=> console.error(err));
    };

    
    return(
        <div 
            className={style.LogIn} 
            
        >
            <form  onSubmit={handleRegister} >
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
                <button type="submit">join</button>
            </form>

        </div>
    );
};

export default Joining;