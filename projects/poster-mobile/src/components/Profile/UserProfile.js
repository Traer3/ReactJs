import React, { useEffect, useState } from "react";
import SideButton from "../SidePanelComponents/SideButton";
import SidePanel from "../SidePanelComponents/SidePanel";
import style from "../SidePanels.module.css"

const UserProfile = ({userId, SBmenuPanel}) => {
    const [showMenu, setShowMenu] = useState(false);
    const [desktopEdit,setDesktopEdit] = useState(false);
    const [enablePosterState, setEnablePosterState] = useState([]);
    
    const togglMenuPanle = () =>{
        setShowMenu(!showMenu)
        
    }

    const toggelDesktopEdit = () => {
        setDesktopEdit(!desktopEdit);
        SBmenuPanel(!desktopEdit);
    }


    useEffect(()=>{
        fetch(`http://localhost:3001/getEnabledPostersState/${userId}`)
        .then((res)=>res.json())
        .then((data)=>{
            if(data.enablePosterState){
                setEnablePosterState(data.enablePosterState)
            }
        })
        .catch((err)=> console.error(err));
    }, [userId]);
   

    const toggleTopic = (topic) => { 
        setEnablePosterState((prevState)=>{
            return prevState.map((obj)=>{
                if (obj.name !== "Posters") return obj;
                const updateState = {
                    ...obj.state,
                    [topic]: !obj.state?.[topic],
                    
                };
                return {
                    ...obj,
                    state: updateState,
                };
            });
        });
    };

    const saveEnabledPostersState = () => {
        fetch('http://localhost:3001/saveEnabledPostersState',{
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({
                userId:1,
                enablePosterState,
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log("Message from db ", data);
            alert(data.message);
        })
        .catch(err=>{
            console.error("Error" , err)
        })
    }

    const getTopicsState = (topic) => {
        const posterObj = enablePosterState.find((obj)=> obj.name === "Posters");
        return posterObj?.state?.[topic] ?? false
    }
    
    return( //make new buttons //onClick={()=>toggleTopic("twoAnswers")} КНОПКА должна светится зеленым если включена и красны если нет 
        <div 
        style={{
            position:'fixed',
            border:'1px solid rgba(95,145,255,0.3)',
            borderRadius:'4px',
            backdropFilter:'blur(clamp(2px, 1vw, 20px))',
            backgroundColor:'rgba(95,145,255,0.2)',
            width:'99vw',
            height:'99vh',
            display:'flex', justifyContent:'center',alignItems:'center',
            zIndex:4,
        }}
        
        >
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
                                 Poster Edit
                            </SideButton>

                            <SideButton
                                buttonState={desktopEdit} 
                                buttonStyle="buttonsOnPanels" 
                                newStyle="buttonsOnPanels"
                                onClick={toggelDesktopEdit} 
                            >
                                 Poster Redactor
                            </SideButton>

                            <SideButton
                                buttonState={desktopEdit} 
                                buttonStyle="buttonsOnPanels" 
                                newStyle="buttonsOnPanels"
                                onClick={toggelDesktopEdit} 
                            >
                                 Create Poster
                            </SideButton>
                        </div>
                    </div>
                    
                    

                </SidePanel>
            }
            
            {desktopEdit && 
                
                    <div style={{width:'600px', height:'600px',background:'transparent', borderRadius:'4px', border:'1px solid blue'}}>
                        <SideButton
                        newStyle="buttonsOnPanels"
                        onClick={saveEnabledPostersState}
                        >
                        Save topics
                         </SideButton>
                        <SideButton
                                buttonState={getTopicsState("TwoAnswers")} 
                                buttonStyle="menuButtonsGreen" 
                                newStyle="menuButtonsRed"
                                onClick={()=>toggleTopic("TwoAnswers")} 
                            >
                                 show two answers 
                        </SideButton>
                        <SideButton
                            /* кнопка не выключает состояния */
                                buttonState={getTopicsState("ProblemsWithStyles")} 
                                buttonStyle="menuButtonsGreen" 
                                newStyle="menuButtonsRed"
                                onClick={()=>toggleTopic("ProblemsWithStyles")} 
                            >
                                 show problemsWithStyles 
                        </SideButton>
                        <SideButton
                                /* кнопка не реагирует на перемену состояния и не меняет цвет */
                                buttonState={getTopicsState("FLEXBox")} 
                                buttonStyle="menuButtonsGreen" 
                                newStyle="menuButtonsRed"
                                onClick={()=>toggleTopic("FLEXBox")} 
                            >
                                 show FLEXBox
                        </SideButton>
                    </div>
                
            }
        </div>
    );
};

export default UserProfile;