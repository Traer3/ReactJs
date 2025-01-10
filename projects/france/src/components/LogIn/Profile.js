import React, { useState } from "react";
import UserIcon from "./userIcon.png"
import MenuStyle from "../css/MenuScreen.module.css"
const Profile = () => {
    const [showIcon, setShowIcon] = useState(true)
    const [showProfile, setShowProfile] = useState(false)

    const display = ()=>{
        setShowIcon(!showIcon)
        setShowProfile(!showProfile)
    }
    return(
        <div>
            {showIcon&&(<button 
                className={MenuStyle.userButton}
                onClick={display}
                >
                <img 
                    className={MenuStyle.menuIcon}
                    alt="dontHaveOne"
                    src={UserIcon}
                />
            </button>)}
            

            {showProfile&&(
                <div> 
                    <button 
                        style={{
                            color:'red',
                            padding:'0px',
                            border:'0px',
                            backgroundColor:'transparent',
                            fontWeight:'bolder',
                            float:'right',
                            fontSize:'16px'
                        }}
                        onClick={display}>
                            X
                    </button>
                    box
                </div>
            )}
            
        </div>
        
    );
};

export default Profile;