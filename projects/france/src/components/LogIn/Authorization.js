import React from "react";

import Profile from "./Profile";

const Authorization = ({ setUserCheck, setUserId}) =>{
 
    return(
        <div style={{

            height:'100vh',
            width:'100vw',
        }}>
            <div style={{
                float:'right',
                marginRight:'2.3%',
            }}>
               
                <div>
                    <Profile setUserCheck={setUserCheck} setUserId={setUserId}/>
                </div>
            </div>
            
           
            

            
            
        </div>
    );
};

export default Authorization;

