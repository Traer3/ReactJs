import React, { useEffect, useState } from "react";
import Joining from "../LogIn/Joining"
import Login from "./Login";

const Authorization = ({setRegistration, setUserCheck, setUserId}) =>{



    const [registerUser, setRegisterUser] = useState(false); 

    useEffect(()=>{
        setRegisterUser(setRegistration)
    },[setRegistration])
    



    return(
        <div >
            <div>
                
                    
            </div>

            <div>
                {registerUser ? (<Login setUserCheck={setUserCheck} setUserId={setUserId}/>) : (<Joining/>) }
                
            </div>

        </div>
    );
};

export default Authorization;

