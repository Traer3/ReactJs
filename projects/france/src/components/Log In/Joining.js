import React from "react";
import style from "../css/MenuScreen.module.css"

const Joining = () => {
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
            <input title="login" placeholder="login"/>
            <input title="password" placeholder="password"/>
            <button>join</button>
            
        </div>
    );
};

export default Joining;