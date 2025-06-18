import React, {useState} from "react";
import SidePanel from "../SidePanelComponents/SidePanel";
import SideButton from "../SidePanelComponents/SideButton";
import SidePanels from '../SidePanels.module.css'
import Authorization from "../Authorization/Authorization";
import PostersData from "../Poster/PostersData";
import { useUser } from "../../PostersContext";


const GuestMenu = () => {
    const {userId} = useUser();
    
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
                                buttonState={addUser} 
                                buttonStyle="addUserButton" 
                                newStyle="hideAddUserButton"
                                iconsName="addUser"
                                onClick={toggleRegistration}
                            />     
                    </div>
                    

                    <Authorization addUser={addUser} />
                </SidePanel>
       </div>
    );
};

export default GuestMenu;