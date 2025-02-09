import React, { useEffect, useState } from "react";
import GuestMenu from "./Guest/GuestMenu";
import MenuScreen from "./User/MenuScreen";
//зона авторизации и пропуска


const Workspace = () => {
    const [userCheck,setUserCheck] = useState(()=>{
        return localStorage.getItem("userCheck") === "true";
    });

    useEffect(()=>{
        localStorage.setItem("userCheck", userCheck);
    },[userCheck]);
   

    return(
        <div>

            {userCheck ? <MenuScreen/> : <GuestMenu setUserCheck={setUserCheck}/>}

        </div>
    );
};

export default Workspace;