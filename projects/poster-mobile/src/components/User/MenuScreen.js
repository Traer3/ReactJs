import React, {useEffect, useState} from "react";
import SidePanel from "../SidePanelComponents/SidePanel";
import SideButton from "../SidePanelComponents/SideButton";
import SidePanels from '../SidePanels.module.css'
import Authorization from "../Authorization/Authorization";
import PostersData from "../Poster/PostersData";
import UserProfile from "../Profile/UserProfile";

const MenuScreen = ({userId,setUserId,setUserCheck}) => {

    const [menuButton,setMenuButton] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const [userButton, setUserButton] = useState(false);
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const [addUser, setAddUser] = useState(true)

    const [profileOpen, setPorofileOpen] = useState(false);
    
    const isLoged = userId > 0;
    useEffect(()=>{
    },[userId,isLoged,])



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
        setUserId(0);
        alert("Bye-bye 👋")
    }

    const [showPosters, setShowPosters] = useState(false);
    //setShowPosters(false);

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

            {profileOpen  &&
                <UserProfile userId={userId} SBmenuPanel={setMenuOpen}/>
            }
            {showPosters && 
                <>{
                    /* 
                     Я хочу так отображать постера , это позволит им не быть зависимым от боковой панели
                     Через localStorage я буду получать постера 
                     а из Poster Main я буду получать указания какой включить и выключить 
                    */
                    /* 
                    {showPosters.map((poster, posterIndex)=>(
                            <div key={posterIndex}>
                            {poster.windows.map(win =>(
                                <DraggableWindow
                                    key={win.id}
                                    styleClass={windowStyle[win.style]}
                                    initialX={win.position.x}
                                    initialY={win.position.y}
                                    id={win.id}
                                    onClose={()=> handleCloseWindow(posterIndex,win.id)}
                                >
                                    <Textarea
                                        id={win.id}
                                        value={win.content}
                                        readOnly={true}
                                    >

                                    </Textarea>
                                </DraggableWindow>
                            ))}
                            </div>
                    ))}
                    */
                }
                </>
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
                            {isLoged ?(
                                <>
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
                            </> 
                            ):(   
                                <SideButton 
                                    buttonState={addUser} 
                                    buttonStyle="addUserButton" 
                                    newStyle="hideAddUserButton"
                                    iconsName="addUser"
                                    onClick={toggleRegistration}
                                />
                            )}
                </div>
                
                {isLoged ? <></> : <Authorization setUserCheck={setUserCheck} addUser={addUser} setUserId={setUserId}/>}
                 
            </SidePanel>
       </div>
    );
};

export default MenuScreen;