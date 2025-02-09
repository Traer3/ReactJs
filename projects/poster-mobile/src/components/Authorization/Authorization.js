import React, { useState } from "react";
import AuthorizationFrom from "../Authorization/AuthorizationFrom";
const Authorization = () =>{

    const [choice, setChoice] = useState(false);
    const [firstInput, setFirstInput] = useState("");
    const [secondInput, setSecondInput] = useState("");

    const handleLogIn = () =>{
        console.log("Login")
    }

    const handleRegistration = () =>{
        console.log("handleRegistration")
    }

    return(
        <div>
            


            {choice?( 
                <AuthorizationFrom
                    hadleSubmit={handleLogIn} //Заменить
                    handleFirstInput={firstInput} //Заменить
                    handleSecondInput={secondInput} //Заменить
                    firstInput={""} //Заменить
                    secondInput={""} //Заменить
                    type="logIn" 
                />
                ):(
                <AuthorizationFrom
                    hadleSubmit={handleRegistration} //Заменить
                    handleFirstInput={firstInput} //Заменить
                    handleSecondInput={secondInput} //Заменить
                    firstInput={""} //Заменить
                    secondInput={""} //Заменить
                    type="registration" 
                />
            )}


        </div>
    );
};

export default Authorization;