import React, { useState } from "react";
import Joining from "./Joining";
import Profile from "./Profile";

const Authorization = () =>{
 
    return(
        <div style={{
            border:'1px solid white',
            height:'100vh',
            width:'99vw',
        }}>
            <div style={{
                float:'right',
                marginRight:'5px',
            }}>
               
                <div>
                    <Profile/>
                </div>
            </div>
            
           
            

            
            
        </div>
    );
};

export default Authorization;

