import React, { useEffect, useState } from "react";
import SideButton from "../SidePanelComponents/SideButton";
import SidePanel from "../SidePanelComponents/SidePanel";
import style from "../SidePanels.module.css"
import CreatePoster from "../Poster/CreatePoster";
import DesktopEdit from "./Desktop/DesktopEdit";
import DeletePoster from "../Poster/DeletePoster";
import EditPoster from "../Poster/EditPoster";
import { useUser } from "../../PostersContext";

const UserProfile = ({SBmenuPanel}) => {

    const {userId,BASE_URL} = useUser();

    const [showMenu, setShowMenu] = useState(false);
    const [desktopEdit,setDesktopEdit] = useState(false);
    
    const [creatPoster, setCreatPoster] = useState(false);
    const [creatPosterButtons, setCreatPoserButtons] = useState(false);

    const [deletePosterButton, setDeletePosterButton] = useState(false);
    const [editPosterButton, setEditPosterButton] = useState(false);

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

    const toggleDeletePoster = () => {
        setShowMenu(false)
        setDeletePosterButton(!deletePosterButton);
    }

    const toggleEditPoster = () => {
        setShowMenu(false);
        setEditPosterButton(!editPosterButton);
    }

    // отображение постеров из базы
    const [showPosters, setShowPosters] = useState([]);
    useEffect(()=>{
            fetch(`${BASE_URL}/getPosterData/${userId}`)
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
                                onClick={toggleEditPoster} 
                            >
                                Edit Posters
                            </SideButton>

                            <SideButton 
                                buttonState={creatPoster} 
                                buttonStyle="buttonsOnPanels" 
                                newStyle="buttonsOnPanels"
                                onClick={toggelPosterCreation} 
                            >
                                Create Poster
                            </SideButton>

                            <SideButton 
                                buttonState={deletePosterButton} 
                                buttonStyle="buttonsOnPanels" 
                                newStyle="buttonsOnPanels"
                                onClick={toggleDeletePoster} 
                            >
                                Delete Poster
                            </SideButton>
                        </div>
                    </div>
                </SidePanel>
            }
            
            {desktopEdit &&  
                <DesktopEdit/>
            }
            
            {creatPoster && <CreatePoster creatPosterButtons={creatPosterButtons} showPoster={showPosters} userId={userId}/>}

            {deletePosterButton && <DeletePoster/>}

            {editPosterButton && <EditPoster/>}
            
        </div>
    );
};

export default UserProfile;