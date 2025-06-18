import React, { useEffect, useState } from "react";
import SideButton from "../SidePanelComponents/SideButton";
import SidePanel from "../SidePanelComponents/SidePanel";
import style from "../SidePanels.module.css"
import CreatePoster from "../Poster/CreatePoster";
import DesktopEdit from "./Desktop/DesktopEdit";


// reforme  
// отдельно edit desktop , create poster , edit poster  
const UserProfile = ({userId, SBmenuPanel}) => {
    const [showMenu, setShowMenu] = useState(false);
    const [desktopEdit,setDesktopEdit] = useState(false);
    
    const [creatPoster, setCreatPoster] = useState(false);
    const [creatPosterButtons, setCreatPoserButtons] = useState(false);

    const togglMenuPanle = () =>{
        setShowMenu(!showMenu)
        setCreatPoserButtons(!creatPosterButtons)
    }

    const toggelDesktopEdit = () => {
        setDesktopEdit(!desktopEdit);
        SBmenuPanel(!desktopEdit);
        
    }

    const toggelPosterCreation = () =>{
        setShowMenu(false)
        setCreatPoster(!creatPoster)
    }

// отображение постеров из базы
const [showPosters, setShowPosters] = useState([]);
useEffect(()=>{
        fetch(`http://localhost:3001/getPosterData/${userId}`)
        .then((res)=>res.json())
        .then((data)=>{
            if(data.posterData){
                setShowPosters(data.posterData)
            }
        })
        .catch((err)=> console.error(err))
    },[userId])


    return(
        <div className={style.menuProfilelWorkSpace}>
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
                                buttonStyle="buttonsOnPanels" 
                                newStyle="buttonsOnPanels"
                                onClick={toggelDesktopEdit} 
                            >
                                 Desktop Edit
                            </SideButton>

                            <SideButton
                                buttonState={desktopEdit} 
                                buttonStyle="buttonsOnPanels" 
                                newStyle="buttonsOnPanels"
                                onClick={toggelDesktopEdit} 
                            >
                                Edit Posters
                            </SideButton>

                            <SideButton 
                                buttonState={desktopEdit} 
                                buttonStyle="buttonsOnPanels" 
                                newStyle="buttonsOnPanels"
                                onClick={toggelPosterCreation} 
                            >
                                Create Poster
                            </SideButton>
                        </div>
                    </div>
                </SidePanel>
            }
            
            {desktopEdit &&  
                <DesktopEdit/>
            }
            
            {creatPoster && <CreatePoster creatPosterButtons={creatPosterButtons} showPoster={showPosters} userId={userId}/>}
            
        </div>
    );
};

export default UserProfile;