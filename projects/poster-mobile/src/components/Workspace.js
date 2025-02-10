import React, { useEffect, useState } from "react";
import GuestMenu from "./Guest/GuestMenu";
//import MenuScreen from "./User/MenuScreen";




const Workspace = () => {
    const [userId, setUserId] = useState(0);
    const [userCheck,setUserCheck] = useState(()=>{
        return localStorage.getItem("userCheck") === "true";
    });

    useEffect(()=>{
        localStorage.setItem("userCheck", userCheck);
    },[userCheck]);
   

    return(
        <div>

            <GuestMenu userId={userId} setUserId={setUserId} setUserCheck={setUserCheck}/> 
            {
              //  userCheck ? <MenuScreen userId={userId} setUserId={setUserId}/> :  <GuestMenu userId={userId} setUserId={setUserId} setUserCheck={setUserCheck}/> //userId={userId} setUserId={setUserId} БУДЕТ ТОЛЬКО У <MenuScreen/> , а пока для тестов
            }
            
            
        </div>
    );
};

export default Workspace;