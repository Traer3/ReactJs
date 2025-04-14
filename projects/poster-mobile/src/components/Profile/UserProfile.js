import React, { useEffect, useState } from "react";
import SideButton from "../SidePanelComponents/SideButton";
import SidePanel from "../SidePanelComponents/SidePanel";
import style from "../SidePanels.module.css"
import ButtonBoxCheck from "../Poster/ButtonBoxCheck";
import windowStyle from "../Windows/WindowStyle.module.css"
import SummaryWindow from "../Windows/SummaryWindow";

const UserProfile = ({userId, SBmenuPanel}) => {
    const [showMenu, setShowMenu] = useState(false);
    const [desktopEdit,setDesktopEdit] = useState(false);
    const [enablePosterState, setEnablePosterState] = useState([]);
    const [creatPoste, setCreatPoster] = useState(false);
    const [chooseStyle, setChooseStyle] = useState(false);
    const [chooseSummaryStyle, setChooseSummaryStyle] = useState(null);
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
      
   
    const summaryWindow = (expr) =>{
        switch (expr) {
            case "red":
                return <div className={windowStyle.redSummWindow}>
                            Hello fag
                       </div>
            case "blue":
                return <div className={windowStyle.summaryWindow}>
                             Hello fag
                        </div>
            case "green":
                return <div className={windowStyle.greenSummWindow}>
                             Hello fag
                        </div>
            case "yellow":
                return <div className={windowStyle.yellowSummWindow}>
                             Hello fag
                        </div>
            default: return null;
        }
    };

    
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
                                         <button 
                                            onClick={()=> setChooseSummaryStyle("red")}
                                            style={{
                                                border:`0.2em solid red`,
                                                padding:'0',
                                                backgroundColor: 'red' ,
                                                width:'max(0.1vw, 1vw)',
                                                height:'max(0.1vw, 1vw)',
                                                cursor:'pointer',
                                                margin:'0.1em',
                                        }}/>
                                        <button 
                                            onClick={()=> setChooseSummaryStyle("blue")}
                                            style={{
                                                border:`0.2em solid blue`,
                                                padding:'0',
                                                backgroundColor: 'blue' ,
                                                width:'max(0.1vw, 1vw)',
                                                height:'max(0.1vw, 1vw)',
                                                cursor:'pointer',
                                                margin:'0.1em',
                                        }}/>
                                        <button 
                                            onClick={()=> setChooseSummaryStyle("green")}
                                            style={{
                                                border:`0.2em solid green`,
                                                padding:'0',
                                                backgroundColor: 'green' ,
                                                width:'max(0.1vw, 1vw)',
                                                height:'max(0.1vw, 1vw)',
                                                cursor:'pointer',
                                                margin:'0.1em',
                                        }}/>
                                        <button 
                                            onClick={()=> setChooseSummaryStyle("yellow")}
                                            style={{
                                                border:`0.2em solid yellow`,
                                                padding:'0',
                                                backgroundColor: 'yellow' ,
                                                width:'max(0.1vw, 1vw)',
                                                height:'max(0.1vw, 1vw)',
                                                cursor:'pointer',
                                                margin:'0.1em',
                                        }}/>
                                        
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
                
                    { 
                        summaryWindow(chooseSummaryStyle)

                    }

                </div>
               </>
            }
        </div>
    );
};

export default UserProfile;