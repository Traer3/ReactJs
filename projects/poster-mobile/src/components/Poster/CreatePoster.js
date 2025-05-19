import React, { useEffect, useState } from "react";
import style from "../SidePanels.module.css"
import windowStyle from "../Windows/WindowStyle.module.css"
import DraggableWindow from "../Windows/DraggableWindow";
import Textarea from "../Windows/Textarea";
import SideButton from "../SidePanelComponents/SideButton";
import ColoredBox from "../Windows/ColoredBox";

//Изменять размер окна , отягивая за край , сохранить размер окна в базу 
// редактировать постеры 



const CreatePoster = ({creatPosterButtons,showPoster,userId}) => {

    useEffect(()=>{
        setShowPosters(showPoster);
        console.log(showPoster)
    },[userId])

    const [chooseStyle, setChooseStyle] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    
    const [creatPoster, setCreatPoster] = useState(false);

    const toogleBoxes = ()=>{
        setChooseStyle(!chooseStyle)
    }
    const CreatingPosterBackground = Array(1000).fill(null).map((_, index)=>(
        <div key={index} className={style.menuProfTest}></div>
    ))


    const [showPosters, setShowPosters] = useState([]);
    const [posterData, setPosterData] = useState([]);
    const [textareaData, setTextareaData,] = useState([]);
    const [posterName, setPosterName] = useState("") 
    const [creatPosteName, setCreatPosterName] = useState(true);

    const handleCreatePoster = () => {
        if(!posterName) return

        const newPoster = {
            name: posterName,
            state: true,
            id:Date.now(),
            windows: []
        };

        setPosterData(prev => [...prev, newPoster]);
        setCreatPoster(!creatPoster); 
        setCreatPosterName(!creatPosteName)
        setShowMenu(false)
    }

    

    const savePosterData = () => {
        const mergedPosters = [...showPosters, ...posterData];
        //console.log(showPosters);
        fetch('http://localhost:3001/savePosterData',{
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({
                userId: userId,
                posterData: mergedPosters,
            })
        })
        .then(res => res.json())
        .then(data=>{
            setPosterName("")
            setPosterData([])
            console.log("Message from db", data.message);
        })
        .catch(err=>{
            console.error("Error saving updated topics" , err)
        })
    }

    const addWindowToPoster = (style) =>{ 
        const updated = [...posterData];
        const lastPoster = updated[updated.length -1];
        if(!lastPoster) return;

        const isTerminal = style.toLowerCase().includes("term") 
        const id = `${isTerminal ? 'tw' : 'sw'}-${Date.now()}`;

        const newWindow = {
            boxState:true,
            state: true,
            type: isTerminal ? "terminal" : "summary",
            id,
            position:{
                x: Math.floor(Math.random()*500),
                y: Math.floor(Math.random()*300),
            },
            style,
            ...(isTerminal
                ? {command: "", output: ""} //новые строки , еще не используем
                : {content: ""}            //то что и в summary
            ),
        };
        lastPoster.windows.push(newWindow);
        setPosterData(updated);
    };

    const handleTextareaChange = (id, value) =>{
        setTextareaData(prev => ({...prev, [id]: value}));

        setPosterData(prev => {
            const updated = [...prev];

            updated.forEach(poster => {
                poster.windows.forEach(window=> {
                    if(window.id === id && window.type === "summary"){
                        window.content = value;
                    }
                    if(window.id === id && window.type === "terminal"){
                        window.content = value;
                    }
                });
            });
            return updated;
        })
    }

    const handleCloseWindow = (posterIndex,idToRemove) =>{
        const updatedPosters = [...posterData];
        const targetPoster = updatedPosters[posterIndex];

        if(!targetPoster) return;

        targetPoster.windows = targetPoster.windows.filter(win => win.id !== idToRemove)
        setPosterData(updatedPosters);
    }

    const handleWindowPositionChange = (id, newPosition) => {
       setPosterData(prev =>
        prev.map(poster =>({
            ...poster,
            windows: poster.windows.map(window =>
                window.id === id
                ? {
                    ...window,
                    position:{
                        x: newPosition.x,
                        y: newPosition.y,
                    },
                }
                : window
            ),
        }))
       );
    };

    let counter = 0;
    function increment(){
        counter++;
    }

    function greet(name) {
        return `KYS, ${name}`;
    }

    function processUserInput(callback){
        const name = "Cunt";
        return callback(name);
    }

    console.log(processUserInput(greet)); // "KYS, CUNT"



    return(
        <>
            {creatPosteName && 
                <div className={style.menuProfileCreatPosterName}>
                    <div className={style.panelFlex}>
                        <input 
                            className={style.menuProfilelCreatPosterNameInput}
                            type="text"
                            placeholder="Poster name" 
                            value={posterName}
                            onChange={(e) => setPosterName(e.target.value)}
                            />
                        <button 
                            className={style.menuProfilelCreatPosterNameButton}
                            onClick={handleCreatePoster}
                            >
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
                                >save</SideButton>      
                            </nav>
                        }
                    </div>
                    
                    {posterData.map((poster, posterIndex)=>(
                        <div key={posterIndex}>
                            {poster.windows.map(win=>(
                            <DraggableWindow 
                                key={win.id}
                                state={win.state}
                                styleClass={windowStyle[win.style]}
                                initialX={win.position.x}
                                initialY={win.position.y}
                                id={win.id}
                                onClose={()=> handleCloseWindow(posterIndex,win.id)}
                                onPositionChange={handleWindowPositionChange}
                            >   
                                <p style={{padding:'0px',margin:'0px'}}>X: {win.position.x}</p>  <p style={{padding:'0px',margin:'0px'}}>Y: {win.position.y}</p>
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
        </>
    );
};

export default CreatePoster;