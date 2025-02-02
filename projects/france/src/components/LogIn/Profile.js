import React, { useEffect, useState } from "react";
import UserIcon from "./userIcon.png"
import MenuStyle from "../css/MenuScreen.module.css"
import Creatura from "../../abominations/Creatura";
import Authorization from "./Authorization";
import AddUserIcon from "./addUserIcon.png"


const Profile = ({userCheck, userId, setUserCheck, setUserId}) => {
    const [profileButton, setProfileButton] = useState(false)
    const [addUserButton, setAddUserButton] = useState(true)
    const [enableProfile, setEnableProfile] = useState(false);
    const [showProfile, setShowProfile] = useState(false);

    const toggleProfile = () =>{
        setProfileButton(!profileButton);
        setTimeout(() => {
           setShowProfile(!showProfile)
        }, 10);

        setEnableProfile(true);
    }

    const toggleRegistration = ()=>{
        setAddUserButton(false)
    }

    useEffect(()=>{
        if(userId > 1){
            setAddUserButton(prev => !prev)
        }
    }, [userId]);


    return(
        <div>
            
            {enableProfile&&(
                <div className={`${MenuStyle.profilePanel} ${showProfile && MenuStyle.profilePanelOpen }`}>

                    <div style={{width:'16vh', height:'0px',margin:'10px'}}>
                        <div style={{display:'flex', alignItems:'left'}}>
                            
                                {addUserButton && 
                                    <button 
                                        className={MenuStyle.addUserButton}
                                        onClick={toggleRegistration}
                                        >
                                        
                                    <img 
                                        className={MenuStyle.menuIcon}
                                        alt="dontHaveOne"
                                        src={AddUserIcon} 
                                    />
                                    </button> 
                                }
                                
                            
                        </div>
                    </div>
                    <div >
                        <div >
                            <div className={MenuStyle.menuFlex}>
                                
                                {userCheck ? 
                                    (<Creatura customStyle={{ transform: "translateX(-800%) translateY(100%)", }}/>) : 
                                    ( <Authorization setRegistration={addUserButton}  setUserCheck={setUserCheck} setUserId={setUserId} />)
                                }
                            
                            </div>
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