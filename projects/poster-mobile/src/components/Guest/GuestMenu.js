import React, {useState} from "react";
import SidePanels from '../SidePanels.module.css'
import SidePanel from "../SidePanelComponents/SidePanel";
import SideButton from "../SidePanelComponents/SideButton";
//независимая зона 
const GuestMenu = () => {

    const [menuButton,setMenuButton] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggelSidePanel = ()=>{
        setMenuButton(!menuButton);
        setMenuOpen(!menuOpen)
    }
    
    //
    return(
       <div style={{padding:'5px' ,  width:'100%', height:'100vh'}}>
        
            <SideButton 
                buttonState={menuButton} 
                buttonStyle="menuButton" 
                newStyle="lonelyButton"
                iconsName="menu"
                onClick={toggelSidePanel} />

            <SidePanel panelStyle="menuPanel" panelState={menuOpen} newStyle="menuPanelOpen">
                
            </SidePanel>

            

      
            <div className={SidePanels.profilePanel} >

                <div style={{background:'green',}}>
                        green
                </div>

            </div>
       </div>
    );
};

export default GuestMenu;