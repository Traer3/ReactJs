import React, { useState } from "react";
import style from "../css/MenuScreen.module.css"

const Joining = () => {

    const [login, setLogin] = useState("");
    const [password,setPassword] = useState("");



    const handleLogChange = (event) => {
        setLogin(event.target.value);
    };

    const handlePassChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event)=>{
        event.preventDefault();
        alert(`submitted login: ${login}`);
    };



   
    return(
        <div 
            className={style.LogIn} 
            style={{
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center'
            }}
        >
            <form onSubmit={handleSubmit}>
                <input type="text" value={login} onChange={handleLogChange} placeholder="login"/>
                <input type="text" value={password} onChange={handlePassChange} placeholder="password"/>
                <button type="submit">join</button>
            </form>

            
        </div>
    );
};

export default Joining;