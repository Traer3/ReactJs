import { createContext, useContext, useState } from "react";

export const PostersContext = createContext();

export const UserProvider = ({children}) =>{
    const [userId, setUserId] = useState(()=>{
        return JSON.parse(localStorage.getItem("userId")) || 0;
    });

    const BASE_URL = "http://localhost:3001";

    return(
        <PostersContext.Provider value={{userId, setUserId, BASE_URL}}>
            {children}
        </PostersContext.Provider>
    );
};

export const useUser = () => useContext(PostersContext);