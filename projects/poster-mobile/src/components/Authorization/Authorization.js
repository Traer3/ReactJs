import React from "react";
import LogIn from "./LogIn";
import Registration from "./Registration";

const Authorization = ({addUser,}) =>{
    return(
        <div>
            {addUser ?( 
                <LogIn />
                ):(
                <Registration/>
            )}
        </div>
    );
};

export default Authorization;