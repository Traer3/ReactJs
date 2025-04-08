import React, {useState} from "react";
import SidePanel from "../SidePanelComponents/SidePanel";
import SideButton from "../SidePanelComponents/SideButton";
import SidePanels from '../SidePanels.module.css'
import Authorization from "../Authorization/Authorization";
import PostersData from "../Poster/PostersData";
import UserProfile from "../Profile/UserProfile";

const GuestMenu = ({userId,setUserId,setUserCheck}) => {

    const [menuButton,setMenuButton] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const [userButton, setUserButton] = useState(false);
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const [addUser, setAddUser] = useState(true)

    const [profileOpen, setPorofileOpen] = useState(false);

    const toggelMenuPanel = ()=>{
        setMenuButton(!menuButton);
        setMenuOpen(!menuOpen)
    }

    const toggelUserPanel = ()=>{
        setUserButton(!userButton);
        setUserMenuOpen(!userMenuOpen)
    }
    
    const toggleRegistration = ()=>{
        setAddUser(!addUser)
    }

    const toggleOpenProfile = ()=>{
        setPorofileOpen(!profileOpen)
        setUserButton(false);
        setUserMenuOpen(false)
    }

    const handleLogOut = () =>{
        localStorage.removeItem("userCheck");
        setUserCheck(false);
        alert("Bye-bye 👋")
    }

    return(
       <div style={{padding:'5px' ,  width:'100%', height:'100vh'}}>
        
            <SideButton 
                buttonState={menuButton} 
                buttonStyle="menuButton" 
                newStyle="lonelyButton"
                iconsName="menu"
                onClick={toggelMenuPanel} 
            />
            <SidePanel 
                panelStyle="menuPanel" 
                panelState={menuOpen} 
                newStyle="menuPanelOpen"
                >
                 <div className={SidePanels.panelIconPlace}/>
                 <div>
                    <PostersData 
                        userId={userId} 
                    />
                 </div>
            </SidePanel>

            {profileOpen &&
                
                <UserProfile userId={userId}/>
            
            }

           
            <SideButton 
                buttonState={userButton} 
                buttonStyle="profileButton" 
                newStyle="lonelyProfileButton"
                iconsName="user"
                onClick={toggelUserPanel} 
                />
            <SidePanel 
                panelStyle="profilePanel" 
                panelState={userMenuOpen} 
                newStyle="profilePanelOpen"
                >

                <div className={SidePanels.panelIconPlace}>
                        <SideButton 
                            buttonState={true} 
                            buttonStyle="logOutButton" 
                            newStyle="logOutButton"
                            iconsName="logOut"
                            onClick={handleLogOut}
                        />
                        <SideButton 
                            buttonState={addUser} 
                            buttonStyle="addUserButton" 
                            newStyle="hideAddUserButton"
                            iconsName="addUser"
                            onClick={toggleRegistration}
                        />
                        <SideButton 
                                buttonState={profileOpen} 
                                buttonStyle="openProfile" 
                                newStyle="openProfile"
                                iconsName="editIcon"
                                onClick={toggleOpenProfile}
                            />
                            
                </div>
                
                
                
                <Authorization setUserCheck={setUserCheck} addUser={addUser} setUserId={setUserId}/>
                 
            </SidePanel>
       </div>
    );
};

export default GuestMenu;