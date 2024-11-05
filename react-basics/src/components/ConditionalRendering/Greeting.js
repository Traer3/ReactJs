import React, { useState } from "react";

const Greeting = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return(
        <div>
            <p>{isLoggedIn ? "Welcome back!" : "Please Log in."}</p>

            <button 
             style={{width:"50px", height:"50px"}} 
             onClick={()=>setIsLoggedIn(!isLoggedIn)}> 
             {isLoggedIn ? "Log Out!": "Log in"} 
            </button>       
        </div>
    );
};

export default Greeting;


