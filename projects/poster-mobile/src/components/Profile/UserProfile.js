import React, { useEffect, useState } from "react";
import SideButton from "../SidePanelComponents/SideButton";
import SidePanel from "../SidePanelComponents/SidePanel";
import style from "../SidePanels.module.css"
import ButtonBoxCheck from "../Poster/ButtonBoxCheck";
import windowStyle from "../Windows/WindowStyle.module.css"

const UserProfile = ({userId, SBmenuPanel}) => {
    const [showMenu, setShowMenu] = useState(false);
    const [desktopEdit,setDesktopEdit] = useState(false);
    const [enablePosterState, setEnablePosterState] = useState([]);
    const [creatPoste, setCreatPoster] = useState(false);
    const [chooseStyle, setChooseStyle] = useState(false);
    const togglMenuPanle = () =>{
        setShowMenu(!showMenu)
        
    }

    const toggelDesktopEdit = () => {
        setDesktopEdit(!desktopEdit);
        SBmenuPanel(!desktopEdit);
        setCreatPoster(false)
    }
    const toggleCreatPoster = () => {
        setCreatPoster(!creatPoste);
        setDesktopEdit(false)
        setShowMenu(false)
    }
    const toogleBoxes = ()=>{
        setChooseStyle(!chooseStyle)
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
        const newState = enablePosterState.map((obj)=>{
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
            setEnablePosterState(newState);
            saveEnabledPostersState(newState);
    };

    const saveEnabledPostersState = (updatedState) => {
        fetch('http://localhost:3001/saveEnabledPostersState',{
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({
                userId: userId,
                enablePosterState: updatedState,
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log("Message from db ", data.message);
        })
        .catch(err=>{
            console.error("Error saving updated topics" , err)
        })
    }

    const getTopicsState = (topic) => {
        const posterObj = enablePosterState.find((obj)=> obj.name === "Posters");
        return posterObj?.state?.[topic] ?? false
    }

    const [userPostersData, setUserPostersData] = useState([
        {
            posterName:"Variables in CSS",
            state:{
                
            }
        },
    ])

    const CreatingPosterBackground = Array(1000).fill(null).map((_, index)=>(
        <div key={index} className={style.menuProfTest}></div>
      ))
    
    const summaryWindow = (
        <div className={windowStyle.redSummWindow}>
            TEST 
        </div>
    )
    
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
                                onClick={toggleCreatPoster} 
                            >
                                Create Poster
                            </SideButton>

                            
                        </div>
                    </div>
                </SidePanel>
            }
            
            {desktopEdit && 
                    <div className={style.menuProfilelDesktopEdit}>
                        <div className={style.panelFlexAndBorder}>
                            <SideButton
                                buttonState={desktopEdit} 
                                buttonStyle="buttonsOnPanels" 
                                newStyle="buttonsOnPanels"
                            >
                                 Posters
                            </SideButton>
                            <SideButton
                                    buttonState={getTopicsState("TwoAnswers")} 
                                    buttonStyle="menuButtonsGreen" 
                                    newStyle="menuButtonsRed"
                                    onClick={()=>toggleTopic("TwoAnswers")} 
                                >
                                    Two Answers
                            </SideButton>
                            <SideButton
                                    buttonState={getTopicsState("DisplayElements")} 
                                    buttonStyle="menuButtonsGreen" 
                                    newStyle="menuButtonsRed"
                                    onClick={()=>toggleTopic("DisplayElements")} 
                                >
                                    Display Elements
                            </SideButton>
                            <SideButton
                                    buttonState={getTopicsState("FLEXBox")} 
                                    buttonStyle="menuButtonsGreen" 
                                    newStyle="menuButtonsRed"
                                    onClick={()=>toggleTopic("FLEXBox")} 
                                >
                                    FLEXBox
                            </SideButton>
                            <SideButton
                                    buttonState={getTopicsState("StyleUsage")} 
                                    buttonStyle="menuButtonsGreen" 
                                    newStyle="menuButtonsRed"
                                    onClick={()=>toggleTopic("StyleUsage")} 
                                >
                                    Style Usage
                            </SideButton>
                            <SideButton
                                    buttonState={getTopicsState("ProblemsWithStyles")} 
                                    buttonStyle="menuButtonsGreen" 
                                    newStyle="menuButtonsRed"
                                    onClick={()=>toggleTopic("ProblemsWithStyles")} 
                                >
                                    ProblemsWithStyles 
                            </SideButton>
                            <SideButton
                                    buttonState={getTopicsState("Position")} 
                                    buttonStyle="menuButtonsGreen" 
                                    newStyle="menuButtonsRed"
                                    onClick={()=>toggleTopic("Position")} 
                                >
                                    Position
                            </SideButton>
                        </div>
                        <div className={style.panelFlexAndBorder}>
                            <SideButton
                                buttonState={desktopEdit} 
                                buttonStyle="buttonsOnPanels" 
                                newStyle="buttonsOnPanels"
                            >
                                 TestButton
                            </SideButton>
                            <SideButton
                                    buttonState={getTopicsState("TwoAnswers")} 
                                    buttonStyle="menuButtonsGreen" 
                                    newStyle="menuButtonsRed"
                                    onClick={()=>toggleTopic("TwoAnswers")} 
                                >
                                    Two 
                            </SideButton>
                            <SideButton
                                    buttonState={getTopicsState("DisplayElements")} 
                                    buttonStyle="menuButtonsGreen" 
                                    newStyle="menuButtonsRed"
                                    onClick={()=>toggleTopic("DisplayElements")} 
                                >
                                     Elements
                            </SideButton>
                            <SideButton
                                    buttonState={getTopicsState("FLEXBox")} 
                                    buttonStyle="menuButtonsGreen" 
                                    newStyle="menuButtonsRed"
                                    onClick={()=>toggleTopic("FLEXBox")} 
                                >
                                    FLEX
                            </SideButton>
                            <SideButton
                                    buttonState={getTopicsState("StyleUsage")} 
                                    buttonStyle="menuButtonsRed" 
                                    newStyle="menuButtonsRed"
                                    onClick={()=>toggleTopic("StyleUsage")} 
                                >
                                    Smokin' Sexy Style
                            </SideButton>
                            <SideButton
                                    buttonState={getTopicsState("ProblemsWithStyles")} 
                                    buttonStyle="menuButtonsGreen" 
                                    newStyle="menuButtonsRed"
                                    onClick={()=>toggleTopic("ProblemsWithStyles")} 
                                >
                                    NO Problems
                            </SideButton>
                            <SideButton
                                    buttonState={getTopicsState("Position")} 
                                    buttonStyle="menuButtonsGreen" 
                                    newStyle="menuButtonsRed"
                                    onClick={()=>toggleTopic("Position")} 
                                >
                                    Position
                            </SideButton>
                        </div>
                        
                    </div>
                
            }
            {creatPoste && 
               <>
                <div className={style.menuProfileCreatPosterBackground}>
                        {CreatingPosterBackground}
                </div>
                <div className={style.menuProfileCreatPoster}>
                    <div style={{position:'absolute',left:'0.2%',top:'3%'}}>
                        <nav className={style.panelFlex}>
                            <SideButton
                                buttonState={showMenu} 
                                buttonStyle="menuProfileSummary" 
                                newStyle="menuProfileSummary"
                                iconsName="summaryIcon"
                                onClick={toogleBoxes}
                            />
                            {chooseStyle && 
                               <div 
                                style={{
                                    display:'flex',
                                    flexDirection:'column',
                                    boxSizing:'border-box',
                                    justifyContent:'center',
                                    alignItems:'center',
                                    marginTop:'0.2em'
                                    }}>
                                        <ButtonBoxCheck color={'red'}/>
                                        <ButtonBoxCheck color={'blue'}/>
                                        <ButtonBoxCheck color={'green'}/>
                                        <ButtonBoxCheck color={'yellow'}/>
                               </div>
                            }
                            <SideButton
                                buttonState={showMenu} 
                                buttonStyle="menuProfileSummary" 
                                newStyle="menuProfileSummary"
                                iconsName="terminalIcon"
                                
                            />
                        </nav>
                    </div>
                
                    {summaryWindow}

                </div>
               </>
            }
        </div>
    );
};

export default UserProfile;