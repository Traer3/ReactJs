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
                            
                </div>
                
                
                
                <Authorization setUserCheck={setUserCheck} addUser={addUser} setUserId={setUserId}/>
                 
            </SidePanel>
      
       </div>
    );
};

export default GuestMenu;