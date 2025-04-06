import React, { useState } from "react";
import SideButton from "../SidePanelComponents/SideButton";
import SidePanel from "../SidePanelComponents/SidePanel";
import style from "../SidePanels.module.css"

const UserProfile = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [desktopEdit,setDesktopEdit] = useState(false);
    
    const togglMenuPanle = () =>{
        setShowMenu(!showMenu)
        
    }

    const toggelDesktopEdit = () => {
        setDesktopEdit(!desktopEdit);
    }
    return( //make new buttons 
        <div 
        style={{
            position:'fixed',
            border:'1px solid rgba(95,145,255,0.3)',
            borderRadius:'4px',
            backdropFilter:'blur(clamp(2px, 1vw, 20px))',
            backgroundColor:'rgba(95,145,255,0.2)',
            width:'99vw',
            height:'99vh',
            zIndex:4,
        }}>
            <SideButton
                buttonState={showMenu} 
                buttonStyle="menuProfilelButton" 
                newStyle="menuProfilelButton"
                iconsName="menu"
                onClick={togglMenuPanle} 
            />
            {showMenu && 
                <SidePanel 
                    panelStyle="menuProfilel" 
                    panelState={showMenu} 
                    newStyle="menuProfilelOpen"
                >
                    <div style={{ height:'4vh'}}/>
                    <div className={style.panelFlex}>
                        <div > 
                            <SideButton
                                buttonState={desktopEdit} 
                                buttonStyle="menuButtons" 
                                newStyle="menuButtons"
                                onClick={toggelDesktopEdit} 
                            >
                                 Desktop Edit
                            </SideButton>

                            <SideButton
                                buttonState={desktopEdit} 
                                buttonStyle="menuButtons" 
                                newStyle="menuButtons"
                                onClick={toggelDesktopEdit} 
                            >
                                 Poster Edit
                            </SideButton>

                            <SideButton
                                buttonState={desktopEdit} 
                                buttonStyle="menuButtons" 
                                newStyle="menuButtons"
                                onClick={toggelDesktopEdit} 
                            >
                                 Poster Redactor
                            </SideButton>

                            <SideButton
                                buttonState={desktopEdit} 
                                buttonStyle="menuButtons" 
                                newStyle="menuButtons"
                                onClick={toggelDesktopEdit} 
                            >
                                 Create Poster
                            </SideButton>
                        </div>
                    </div>
                    
                    

                </SidePanel>
            }
        </div>
    );
};

export default UserProfile;