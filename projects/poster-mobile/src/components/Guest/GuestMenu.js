import React, {useState} from "react";
import SidePanel from "../SidePanelComponents/SidePanel";
import SideButton from "../SidePanelComponents/SideButton";
import SidePanels from '../SidePanels.module.css'
import Authorization from "../Authorization/Authorization";
import PostersData from "../Poster/PostersData";

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
    }

    const handleLogOut = () =>{
        localStorage.removeItem("userCheck");
        setUserCheck(false);
        alert("Bye-bye 👋")
    }

    //App zIndex 4 
    return(
       <div style={{padding:'5px' ,  width:'100%', height:'100vh'}}>
        
            <SideButton 
                buttonState={menuButton} 
                buttonStyle="lonelyButton" 
                newStyle="lonelyButton"
                iconsName="menu"
                onClick={toggelMenuPanel} 
            />
            <SidePanel 
                panelStyle="menuPanel" 
                panelState={menuOpen} 
                newStyle="menuPanelOpen"
                >
                 <div className={SidePanels.panelIconPlace}>
                 <SideButton 
                    buttonState={menuButton} 
                    buttonStyle="menuButton" 
                    newStyle="menuButton"
                    iconsName="menu"
                    onClick={toggelMenuPanel} 
                />
                 </div>
                 <div>
                    <PostersData 
                        userId={userId} 
                    />
                 </div>
            </SidePanel>
       
            {profileOpen &&
                <div 
                    style={{
                        position:'absolute',
                        border:'1px solid red',
                        backgroundColor:'red',
                        width:'1910px',
                        height:'940px',
                        zIndex:5,
                    }}>
                 </div>
            }

           
            <SideButton 
                    buttonState={userButton} 
                    buttonStyle="lonelyProfileButton" 
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
                                buttonState={userButton} 
                                buttonStyle="profileButton" 
                                newStyle="profileButton"
                                iconsName="user"
                                onClick={toggelUserPanel} 
                            />
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
                                iconsName="logOut"
                                onClick={toggleOpenProfile}
                            />
                                
                    </div>
                    
                    
                    
                    <Authorization setUserCheck={setUserCheck} addUser={addUser} setUserId={setUserId}/>
                    
                </SidePanel>
       </div>
    );
};

export default GuestMenu;