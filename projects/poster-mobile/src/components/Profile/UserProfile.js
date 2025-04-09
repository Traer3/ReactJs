import React, { useEffect, useState } from "react";
import SideButton from "../SidePanelComponents/SideButton";
import SidePanel from "../SidePanelComponents/SidePanel";
import style from "../SidePanels.module.css"

const UserProfile = ({userId }) => {
    const [showMenu, setShowMenu] = useState(false);
    const [desktopEdit,setDesktopEdit] = useState(false);
    
    const togglMenuPanle = () =>{
        setShowMenu(!showMenu)
        
    }

    const toggelDesktopEdit = () => {
        setDesktopEdit(!desktopEdit);
    }

    const [enablePosterState, setEnablePosterState] = useState(null);
    useEffect(()=>{
       
        
        fetch(`http://localhost:3001/getEnabledPostersState/${userId}`)
        .then((res)=>res.json())
        .then((data)=>{
            if(data.enablePosterState){
                setEnablePosterState(data.enablePosterState)
            }
        })
        .catch((err)=> console.error(err));
    }, [userId ,setEnablePosterState, ]);
   

    const toggleTopic = (topic) => { 
        setEnablePosterState((prevState)=>{
            return prevState.map((obj)=>{
                if (obj.name !== "Posters") return obj;
                const updateState = {
                    ...obj.state,
                    [topic]: !obj.state?.[topic],
                    
                };
                console.log(obj.state[topic])
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
                userId:userId,
                enablePosterState,
            })
        })
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
            display:'flex', justifyContent:'center',alignItems:'center',
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

            {desktopEdit && 
                
                    <div style={{width:'600px', height:'600px',background:'transparent', borderRadius:'4px', border:'4px solid blue'}}>
                        <SideButton
                        newStyle="buttonsOnPanels"
                        onClick={saveEnabledPostersState}
                        >
                        Save topics
                         </SideButton>
                        <SideButton
                                buttonState={desktopEdit} 
                                buttonStyle="menuButtons" 
                                newStyle="menuButtons"
                                onClick={()=>toggleTopic("twoAnswers")} 
                            >
                                 show two answers 
                        </SideButton>
                        <SideButton
                                buttonState={desktopEdit} 
                                buttonStyle="menuButtons" 
                                newStyle="menuButtons"
                                onClick={()=>toggleTopic("problemsWithStyles")} 
                            >
                                 show problemsWithStyles 
                        </SideButton>
                        <SideButton
                                buttonState={desktopEdit} 
                                buttonStyle="menuButtons" 
                                newStyle="menuButtons"
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