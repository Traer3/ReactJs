import React, { useState } from "react";
import Joining from "./Joining";
import Profile from "./Profile";

const Authorization = () =>{
    const [hideProfile, setHideProfile] = useState(false);

    const showProfile = ()=>{
        setHideProfile(!hideProfile);
    }
    return(
        <div style={{
            
            border:'3px solid black',
            height:'100vh',
            width:'100vw',

            
        }}>
            <div style={{
                display:'flex',
                
                justifyContent:'right',
                marginRight:'0.8%'
            }}>
            <div  onClick={showProfile}>Open</div>

            <div style={{
                display:'flex',
                alignItems:'right',
                justifyContent:'right',
                marginRight:'0.8%'

            }}>
                
                {hideProfile &&(
                    <Profile/>
                )}
                
            </div>
            </div>
            

            <div style={{
                border:'3px solid green',
                display:'flex',
                justifyContent:'center',
                width:'min-content'
             }}>
                <Joining/>
            </div>

            
            
        </div>
    );
};

export default Authorization;