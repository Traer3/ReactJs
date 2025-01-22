import React from "react";

import Profile from "./Profile";

const Authorization = ({ setUserCheck}) =>{
 
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
                    <Profile setUserCheck={setUserCheck}/>
                </div>
            </div>
            
           
            

            
            
        </div>
    );
};

export default Authorization;

