import React, { useState } from "react";
import UserIcon from "./userIcon.png"
import MenuStyle from "../css/MenuScreen.module.css"
import Creatura from "../Creatura";
import Joining from "../LogIn/Joining"
const Profile = () => {
    const [profileButton, setProfileButton] = useState(false)
    const [enableProfile, setEnableProfile] = useState(false);
    const [showProfile, setShowProfile] = useState(false);

    const toggleProfile = () =>{
        setProfileButton(!profileButton);

        setTimeout(() => {
           setShowProfile(!showProfile)
        }, 10);

        setEnableProfile(true);
    }

   
    return(
        <div>
            
            {enableProfile&&(
                <div className={`${MenuStyle.profilePanel} ${showProfile && MenuStyle.profilePanelOpen }`}>
                        <div >
                            <div className={MenuStyle.menuFlex}>
                            <Joining/>
                            <Creatura customStyle={{ transform: "translateX(-800%) translateY(100%)", }}/>
                            
                            </div>
                    </div>
                </div>
            )}
            
            <button 
                    className={profileButton ? MenuStyle.profileButton : MenuStyle.lonelyButton}
                    onClick={toggleProfile}
                >
                        <img 
                        className={MenuStyle.menuIcon}
                        alt="dontHaveOne"
                        src={UserIcon} 
                        />
            </button>
            
        </div>
        
    );
};

export default Profile;