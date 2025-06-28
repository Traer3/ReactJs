import React, {useState} from "react";
import SidePanel from "../SidePanelComponents/SidePanel";
import SideButton from "../SidePanelComponents/SideButton";
import SidePanels from '../SidePanels.module.css'
import Authorization from "../Authorization/Authorization";
import PostersData from "../Poster/PostersData";
import UserProfile from "../Profile/UserProfile";
import PosterScreen from "../Poster/PosterScreen";
import { useUser } from "../../PostersContext";



const MenuScreen = () => {
    const {userId} = useUser();
    const {setUserId} = useUser();

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
        localStorage.setItem("userId", JSON.stringify(0));
        setUserId(0);
        alert("Bye-bye 👋")
    }
    
    //костыль ^_^
    const [checkState, setCheckState] = useState(0);

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
                        setCheckState={setCheckState}
                        checkState={checkState}
                    />
                 </div>
            </SidePanel>

            {profileOpen  &&
                <UserProfile userId={userId} SBmenuPanel={setMenuOpen}/>
            }

            
            {true && 
                <PosterScreen userId={userId} checkState={checkState} setCheckState={setCheckState}/>
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
                {userId > 0 ? 
                    <>
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
                                    buttonState={profileOpen} 
                                    buttonStyle="openProfile" 
                                    newStyle="openProfile"
                                    iconsName="editIcon"
                                    onClick={toggleOpenProfile}
                                />        
                        </div>
                    </> 
                    : 
                    <>
                        <div className={SidePanels.panelIconPlace}>
                                <SideButton 
                                    buttonState={userButton} 
                                    buttonStyle="profileButton" 
                                    newStyle="profileButton"
                                    iconsName="user"
                                    onClick={toggelUserPanel} 
                                />
                                
                                <SideButton 
                                    buttonState={addUser} 
                                    buttonStyle="addUserButton" 
                                    newStyle="hideAddUserButton"
                                    iconsName="addUser"
                                    onClick={toggleRegistration}
                                />     
                        </div>
                        <Authorization addUser={addUser} />
                    </>}
            </SidePanel>


       </div>
    );
};

export default MenuScreen;