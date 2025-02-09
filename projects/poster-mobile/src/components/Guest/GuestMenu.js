import React, {useState} from "react";
import SidePanel from "../SidePanelComponents/SidePanel";
import SideButton from "../SidePanelComponents/SideButton";
import SidePanels from '../SidePanels.module.css'
//независимая зона 
const GuestMenu = () => {

    const [menuButton,setMenuButton] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const [userButton, setUserButton] = useState(false);
    const [userMenuOpen, setUserMenuOpen] = useState(false);

    const toggelMenuPanel = ()=>{
        setMenuButton(!menuButton);
        setMenuOpen(!menuOpen)
    }

    const toggelUserPanel = ()=>{
        setUserButton(!userButton);
        setUserMenuOpen(!userMenuOpen)
    }
    
    //
    return(
       <div style={{padding:'5px' ,  width:'100%', height:'100vh'}}>
        
            <SideButton 
                buttonState={menuButton} 
                buttonStyle="menuButton" 
                newStyle="lonelyButton"
                iconsName="menu"
                onClick={toggelMenuPanel} />

            <SidePanel 
                panelStyle="menuPanel" 
                panelState={menuOpen} 
                newStyle="menuPanelOpen"
                >
                 <div className={SidePanels.panelIconPlace}/>
                 <div>
                    <SideButton
                         buttonState={userButton}                 
                         buttonStyle="buttonsOnPanels"
                         newStyle="buttonsOnPanels"
                         onClick={toggelUserPanel} 
                    >
                        Posters
                    </SideButton>
                    
                 </div>
                {
                //кнопки будут включать постера и существ и т.д , а сами они уже загружены в GuestMenu ну или просто Menu
                }

            </SidePanel>
            
            { //state to ture poster on && 
                //POSTERS
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
                            buttonState={userButton} //dont forget 
                            buttonStyle="addUserButton"
                            newStyle="addUserButton"
                            iconsName="addUser"
                            />
                </div>
                

            </SidePanel>
      
       </div>
    );
};

export default GuestMenu;