import React, { useEffect, useState } from "react";
import SideButton from "../SidePanelComponents/SideButton";
import SidePanel from "../SidePanelComponents/SidePanel";
import style from "../SidePanels.module.css"
import windowStyle from "../Windows/WindowStyle.module.css"
import DraggableWindow from "../Windows/DraggableWindow.js";
import ColoredBox from "../Windows/ColoredBox.jsx";
import Textarea from "../Windows/Textarea.jsx"; // Мы будем задавать базе данных запрос на то что бы сохранить информацию с этого текстового поля в таблицу , для каждого поля свой запрос 

//Изменять размер окна , отягивая за край , сохранить размер окна в базу 
//Сохранять позицию для Юзера в базе 
//Создать кнопку Постеры юзера 
//Загрузить с базы постеры от юзера 

const UserProfile = ({userId, SBmenuPanel}) => {
    const [showMenu, setShowMenu] = useState(false);
    const [desktopEdit,setDesktopEdit] = useState(false);
    const [enablePosterState, setEnablePosterState] = useState([]);
   
    const [creatPoster, setCreatPoster] = useState(false);
    const [creatPosteName, setCreatPosterName] = useState(false);
    const [chooseStyle, setChooseStyle] = useState(false);
    const [creatPosterButtons, setCreatPoserButtons] = useState(false);

    

    const [windows, setWindows] = useState([]);

    
    const togglMenuPanle = () =>{
        setShowMenu(!showMenu)
        setCreatPoserButtons(!creatPosterButtons)
    }

    const toggelDesktopEdit = () => {
        setDesktopEdit(!desktopEdit);
        SBmenuPanel(!desktopEdit);
        setCreatPoster(false)
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


    const CreatingPosterBackground = Array(1000).fill(null).map((_, index)=>(
        <div key={index} className={style.menuProfTest}></div>
    ))
    

    const createWindows = (winStyleName) =>{
        const newWindow = {
            id:Date.now(), //без этого я не смогу создавать много новых окон 
            style: winStyleName,
            x: Math.floor(Math.random()*500),
            y: Math.floor(Math.random()*300),
        };
        setWindows(prev => [...prev, newWindow])
    }

    const handleCloseWindow = (idToRemove) =>{
        setWindows((prev)=> prev.filter(win => win.id !== idToRemove));
    }

    const createPoster = (winStyleName,posterName,) =>{
         newPoster = {
            id:userId,
            name: posterName,
            style: winStyleName,
            x: Math.floor(Math.random()*500),
            y: Math.floor(Math.random()*300),
        };
        newPoster.name = posterName
        newPoster.windows.push({
            type: "summary",
            id: "sw-" + Date.now(),
            position: { x: 100, y: 200 },
            content: "Описание окна"
            });
        
    }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    const [posterName, setPosterName] = useState("") 
       

    const [posterData, setPosterData] = useState([]);

    const newPoster = {
        name: posterName,
        windows: []
      };

    useEffect(()=>{
        fetch(`http://localhost:3001/getPosterData/${userId}`)
        .then((res)=>res.json())
        .then((data)=>{
            if(data.posterData){
                setPosterData(data.posterData)
                console.log(data.posterData)
            }
        })
        .catch((err)=> console.error(err))
    },[userId])

    const savePosterData = () => {
        fetch('http://localhost:3001/savePosterData',{
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({
                userId: userId,
                posterData: posterData,
            })
        })
        .then(res => res.json())
        .then(data=>{
            console.log("Message from db", data.message);
        })
        .catch(err=>{
            console.error("Error saving updated topics" , err)
        })
    }

    const [textareaData, setTextareaData,] = useState([]);
    
    const handleTextareaChange = (id, value) =>{
        setTextareaData(prev => ({...prev, [id]: value}));
    }

    const handleCreatePoster = () => {
        if(!posterName) return

        const newPoster = {
            name: posterName,
            windows: []
        };
        setPosterData(prev => [...prev, newPoster]);

        setPosterName("");    //очистить поле 
        setCreatPoster(!creatPoster); //показачать редактор
        setCreatPosterName(!creatPosteName)
        setCreatPoserButtons(true)
        setDesktopEdit(false)
        setShowMenu(false)
    }


    const addWindowToPoster = (style) =>{ 
        const updated = [...posterData];
        const lastPoster = updated[updated.length -1];
        if(!lastPoster) return;

        const isTerminal = style.toLowerCase().includes("Term") //сделать игнор кейс
        const id = `${isTerminal ? 'tw' : 'sw'}-${Date.now()}`;

        const newWindow = {
            type: isTerminal ? "terminal" : "summary",
            id,
            position:{
                x: Math.floor(Math.random()*500),
                y: Math.floor(Math.random()*300),
            },
            style,
            ...(isTerminal
                ? {command: "", output: ""}
                : {content: ""}
            ),
        };
        lastPoster.windows.push(newWindow);
        setPosterData(updated);
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
                                onClick={()=>setCreatPosterName(!creatPosteName)} 
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
            {creatPosteName && 
                <div className={style.menuProfileCreatPosterName}>
                    <div className={style.panelFlex}>
                        <input 
                            type="text"
                            placeholder="Poster name" 
                            value={posterName}
                            onChange={(e) => setPosterName(e.target.value)}
                            style={{
                                border:'1px solid rgba(95,145,255,0.3)',
                                borderRadius:'0.2em',
                                background:'rgba(95,145,255,0.2)',
                                backdropFilter:'blur(10px)',
                                backgroundColor:'transparent',
                                width:'clamp(20px, 7.5vw, 10vw)',
                                fontFamily:'Arial, sans-serif',
                                fontSize:'clamp(0.1rem,0.8vw,3rem)',
                                textAlign:'center',
                                marginBottom:'0.5em'
                        }}/>
                        <button 
                            onClick={handleCreatePoster}
                            style={{
                                border:'1px solid rgba(95,145,255,0.3)',
                                borderRadius:'0.2em',
                                background:'rgba(95,145,255,0.2)',
                                width:'clamp(20px, max-content, 10vw)',
                                height:'height: clamp(30px, max-content, 10vh)',
                                fontSize:'clamp(0.1rem,0.8vw,3rem)',
                        }}>
                            begin
                        </button>
                    </div>
                </div>
            }
            {creatPoster && 
               <>
                <div className={style.menuProfileCreatPosterBackground}>{CreatingPosterBackground}</div>
                <div className={style.menuProfileCreatPoster}>
                    <div style={{position:'absolute',left:'0.2%',top:'3%'}}>
                        {creatPosterButtons && 
                            <nav className={style.panelFlex}>
                                <SideButton
                                    buttonState={showMenu} 
                                    buttonStyle="menuProfileSummary" 
                                    newStyle="menuProfileSummary"
                                    iconsName="summaryIcon"
                                    onClick={toogleBoxes}
                                />
                                {chooseStyle && 
                                <nav className={style.panelFlex} style={{padding:0,marginTop:'0.2em'}}>
                                        <ColoredBox
                                            onClick={()=> addWindowToPoster("redSummWindow")}
                                            color={"red"}
                                            />
                                        <ColoredBox
                                            onClick={()=> addWindowToPoster("summaryWindow")}
                                            color={"blue"}
                                        />
                                        <ColoredBox
                                            onClick={()=> addWindowToPoster("greenSummWindow")}
                                            color={"green"}
                                        />
                                        <ColoredBox
                                            onClick={()=> addWindowToPoster("yellowSummWindow")}
                                            color={"yellow"}
                                        />
                                </nav>
                                }
                                <SideButton
                                    buttonState={showMenu} 
                                    buttonStyle="menuProfileSummary" 
                                    newStyle="menuProfileSummary"
                                    iconsName="terminalIcon"
                                />
                                {chooseStyle && 
                                <nav className={style.panelFlex} style={{padding:0,marginTop:'0.2em'}}>
                                        <ColoredBox
                                            onClick={()=> addWindowToPoster("redTermWindow")}
                                            color={"red"}
                                            />
                                        <ColoredBox
                                            onClick={()=> addWindowToPoster("terminalWindow")}
                                            color={"blue"}
                                        />
                                        <ColoredBox
                                            onClick={()=> addWindowToPoster("greenTermWindow")}
                                            color={"green"}
                                        />
                                        <ColoredBox
                                            onClick={()=> addWindowToPoster("yellowTermWindow")}
                                            color={"yellow"}
                                        />
                                </nav>
                                }
                                <SideButton
                                    buttonStyle="menuProfileSummary" 
                                    newStyle="menuProfileSummary"
                                    onClick={()=>savePosterData()}
                                >Test save</SideButton>
                                
                            </nav>
                        }
                    </div>
                    
                    {posterData.map((poster, posterIndex)=>(
                        <div key={posterIndex}>
                            <h2>{poster.name}</h2>
                            {poster.windows.map(win=>(
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
                                    value={textareaData[win.id] || ""}
                                    onChange={handleTextareaChange} 
                                /> 
                                
                            </DraggableWindow>
                    ))}
                        </div>
                    ))}
                </div>
               </>
            }
            
        </div>
    );
};

export default UserProfile;