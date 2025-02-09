import React from "react";
import style from "./Authorization.module.css"

const AuthorizationFrom = ({hadleSubmit,handleFirstInput,handleSecondInput, firstInput, secondInput , type}) => {
    return(
        <div className={style.LogIn}>
            <form  onSubmit={hadleSubmit} >
                <input 
                    type="text" 
                    value={firstInput} 
                    onChange={handleFirstInput} 
                    placeholder="login"
                />
                <input 
                    type="password" 
                    value={secondInput} 
                    onChange={handleSecondInput}
                    placeholder="password"
                />
                <button  type="submit">{type}</button>
            </form>
        </div>
    );
};

export default AuthorizationFrom;