import React, { useState } from "react";
import GuestMenu from "./Guest/GuestMenu";
//import MenuScreen from "./User/MenuScreen";
//зона авторизации и пропуска


const Workspace = () => {
    const [userCheck,setUserCheck] = useState(false)

   

    return(
        <div>
            {userCheck ? <h1 style={{color:'red'}}>we are still working on it</h1> : <GuestMenu setUserCheck={setUserCheck}/>}
            
            
           

        </div>
    );
};

export default Workspace;