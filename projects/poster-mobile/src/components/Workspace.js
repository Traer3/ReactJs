import React from "react";
import MenuScreen from "./User/MenuScreen";
import { useUser } from "../PostersContext";


const Workspace = () => {
    
    const {userId} = useUser();
    console.log(userId)
    
    return(
        <>
           <MenuScreen/> 
        </>
    );
};

export default Workspace;