import React, { useEffect, useState } from "react";
import GuestMenu from "./Guest/GuestMenu";
import MenuScreen from "./User/MenuScreen";


const Workspace = () => {
    
    const [userId, setUserId] = useState(()=>{
        return JSON.parse(localStorage.getItem("userId")) || 0;
    });
    // delete 
    const [userCheck,setUserCheck] = useState(()=>{
        return JSON.parse(localStorage.getItem("userCheck")) || false;
    });

    useEffect(()=>{
        localStorage.setItem("userCheck", JSON.stringify(userCheck));
        localStorage.setItem("userId", JSON.stringify(userId))
    },[userCheck, userId]);
   
    return(
        <div>
            {
              userCheck ? (
                <MenuScreen userId={userId} setUserId={setUserId} setUserCheck={setUserCheck}/>) :(
                <GuestMenu userId={userId} setUserId={setUserId} setUserCheck={setUserCheck}/> )
                  
            }
            
            
        </div>
    );
};

export default Workspace;