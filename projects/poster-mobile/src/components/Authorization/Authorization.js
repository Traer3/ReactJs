import React from "react";
import LogIn from "./LogIn";
import Registration from "./Registration";

const Authorization = ({setUserCheck, addUser}) =>{
    return(
        <div>
            {addUser ?( 
                <LogIn setUserCheck={setUserCheck}/>
                ):(
                <Registration/>
            )}
        </div>
    );
};

export default Authorization;