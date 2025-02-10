import React from "react";
import LogIn from "./LogIn";
import Registration from "./Registration";

const Authorization = ({setUserCheck, addUser, setUserId,}) =>{
    return(
        <div>
            {addUser ?( 
                <LogIn setUserCheck={setUserCheck} setUserId={setUserId}/>
                ):(
                <Registration/>
            )}
        </div>
    );
};

export default Authorization;