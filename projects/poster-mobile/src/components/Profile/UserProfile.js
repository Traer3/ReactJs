import React, { useEffect, useState } from "react";
import SideButton from "../SidePanelComponents/SideButton";
import SidePanel from "../SidePanelComponents/SidePanel";
import style from "../SidePanels.module.css"
import CreatePoster from "../Poster/CreatePoster";


const UserProfile = ({userId, SBmenuPanel}) => {
    const [showMenu, setShowMenu] = useState(false);
    const [desktopEdit,setDesktopEdit] = useState(false);
    const [enablePosterState, setEnablePosterState] = useState([]);
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
    
    console.log(enablePosterState)

    const toggleTopic = (topic) => { 
        const newState = enablePosterState.map((obj)=>{
            if (obj.name !== "UsersPosters") return obj;
                const updateState = {
                    ...obj.state,
                    [topic]: !obj.state?.[topic],
                    
                };
                return {
                    ...obj,
                    state: updateState,
                };
        });
        const filteredState = newState.filter(obj => obj.name !== "UsersPosters");
        const mergedPosters = [...filteredState, ...posterFilterList]
            setEnablePosterState(newState);
            saveEnabledPostersState(mergedPosters);
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

    const [posterFilterList, setPosterFilterList] = useState([
        {
            name : "UsersPosters",
            state:{},
        },
    ]);
   
    const togglePoster = (posterId) => {
        const updatedPosters = showPosters.map(poster=>{
            if(poster.id === posterId){
                return{
                    ...poster,
                    state: !poster.state
                };
            }
            return poster;
        });

        setShowPosters(updatedPosters)

        const newStateObject = {};
        updatedPosters.forEach((poster)=>{
            newStateObject[poster.name] = poster.state;
        });
        
        const newPosterState = {
            name:"UsersPosters",
            state: newStateObject, 
        }
        
        
        const filteredState = enablePosterState.filter(obj => obj.name !== "UsersPosters");
        const mergedPosters = [...filteredState, newPosterState]
        setPosterFilterList([newPosterState])
        saveEnabledPostersState(mergedPosters);
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
            /*Создать метод который будет загружать постеры как кнопки и выводить те которые включены и выключены НУ и подргужать новые для их выключения и выключения */
                    <div className={style.menuProfilelDesktopEdit} >

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
                                buttonStyle="buttonsOnPanels" 
                                newStyle="buttonsOnPanels"
                            >Yours posters
                            </SideButton>
                            
                            {showPosters.map((poster, posterIndex)=>(
                                <div key={posterIndex}>
                                    <SideButton
                                            buttonState={poster.state // менять цвет кнопки , мы получаем состояние из enablePosterState в списке UsersPosters 
                                                } 
                                            buttonStyle="menuButtonsGreen" 
                                            newStyle="menuButtonsRed"
                                            onClick={()=>togglePoster(poster.id)}
                                        >
                                        {poster.name}
                                        </SideButton>
                                </div>
                            ))}
                        </div>
                    </div>
            }
            
            {creatPoster && <CreatePoster creatPosterButtons={creatPosterButtons} showPoster={showPosters} userId={userId}/>}
            
        </div>
    );
};

export default UserProfile;