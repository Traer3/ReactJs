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
    return(
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
                    newStyle="menuProfilel"
                >
                    <div style={{ height:'4vh'}}/>

                    <div className={style.panelFlex}>
                        <div >
                            <button 
                                style={{
                                    border:'1px solid white',
                                    borderRadius:'4px',
                                    width:'100px',
                                    height:'50px',
                                    background:'red',
                                    margin:'0.5em'
                                }}
                            onClick={toggelDesktopEdit}    
                        >
                            Desktop Edit
                        </button>
                        <button 
                                style={{
                                    border:'1px solid white',
                                    borderRadius:'4px',
                                    width:'100px',
                                    height:'50px',
                                    background:'red',
                                    margin:'0.5em'
                                }}
                            onClick={toggelDesktopEdit}    
                        >
                            Poster Redactor
                        </button>
                        </div>
                    </div>
                    
                    

                </SidePanel>
            }
        </div>
    );
};

export default UserProfile;