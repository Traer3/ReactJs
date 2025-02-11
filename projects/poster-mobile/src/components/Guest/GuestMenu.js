import React, {useEffect, useState} from "react";
import SidePanel from "../SidePanelComponents/SidePanel";
import SideButton from "../SidePanelComponents/SideButton";
import SidePanels from '../SidePanels.module.css'
import Authorization from "../Authorization/Authorization";
import PostersData from "../Poster/PostersData";
//import PosterInterface from "../Poster/PosterInterface";


//независимая зона 
const GuestMenu = ({userId,setUserId,setUserCheck}) => {

    const [menuButton,setMenuButton] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const [userButton, setUserButton] = useState(false);
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const [addUser, setAddUser] = useState(true)

    //const [posterStates, setPosterStates] = useState({});
    //const [updatePosterState, setUpdatePosterState] = useState(()=> ()=>{});
    const [portalDiv, setPortalDiv] = useState(null);
    useEffect(()=>{
        const div = document.createElement("div");
        div.id = "poster-root";
        document.body.appendChild(div);
        setPortalDiv(div);
        
        return () =>{
            document.body.removeChild(div);
        };
    },[]);


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
                onClick={toggelMenuPanel} />

            <SidePanel 
                panelStyle="menuPanel" 
                panelState={menuOpen} 
                newStyle="menuPanelOpen"
                >
                 <div className={SidePanels.panelIconPlace}/>
                 <div>
                    <PostersData 
                        userId={userId} 
                        portalDiv={portalDiv}
                        //setPosterStates={setPosterStates} 
                        //setUpdatePosterState={setUpdatePosterState}
                    />
                 </div>
                {
                //кнопки будут включать постера и существ и т.д , а сами они уже загружены в GuestMenu ну или просто Menu
                }

            </SidePanel>
            
            { 
            // posterStates&&updatePosterState && (<PosterInterface posterStates={posterStates} updatePosterState={updatePosterState}/>)
            <div id="poster-container"></div>
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
                        
                </div>
                
                <Authorization setUserCheck={setUserCheck} addUser={addUser} setUserId={setUserId}/>
                 
            </SidePanel>
      
       </div>
    );
};

export default GuestMenu;