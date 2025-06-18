import React from "react";
import GuestMenu from "./Guest/GuestMenu";
import MenuScreen from "./User/MenuScreen";
import { useUser } from "../PostersContext";


const Workspace = () => {
    
    const {userId} = useUser();
    console.log(userId)
    
    return(
        <div>
            {
              userId > 0 ? <MenuScreen/> : <GuestMenu/> 
            }
        </div>
    );
};

export default Workspace;