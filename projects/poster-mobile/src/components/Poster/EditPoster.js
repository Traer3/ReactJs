import React, { useEffect, useState } from "react";
import SideButton from "../SidePanelComponents/SideButton";
import style from "../SidePanels.module.css"
import windowStyle from "../Windows/WindowStyle.module.css"
import DraggableWindow from "../Windows/DraggableWindow";
import Textarea from "../Windows/Textarea";
import { useUser } from "../../PostersContext";
import ColoredBox from "../Windows/ColoredBox";

const EditPoster = () => {

    const {userId} = useUser();

    const [choosePoster, setChoosePoster] = useState(true);
    const [editPoster,setEditPoster] = useState(false);
    const [chooseStyle, setChooseStyle] = useState(false);
    const toogleBoxes = ()=>{
        setChooseStyle(!chooseStyle)
    }

    const [creatPosterButtons, setCreatPoserButtons] = useState(false);


    const [selectedPoster, setSelectedPoster] = useState([])

    useEffect(()=>{
        if(selectedPoster.length > 0) {
            const initialData = {};

            selectedPoster[0].windows.forEach(win => {
                if(win.type === "summary" || win.type === "terminal"){
                    initialData[win.id] = win.content || "";
                }
            });
            setTextareaData(initialData);
        }
    },[selectedPoster])

    const [posterData, setPosterData] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:3001/getPosterData/${userId}`)
        .then((res)=>res.json())
        .then((data)=>{
            if(data.posterData){
                setPosterData(data.posterData)
            }
        })
        .catch((err)=> console.error(err))
    },[userId])

    const [textareaData, setTextareaData,] = useState([]);
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

        setSelectedPoster(prev => 
            prev.map(poster => ({
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
        )
    };

    const handleCloseWindow = (posterIndex,idToRemove) =>{
        const updatedPosters = [...posterData];
        const targetPoster = updatedPosters[posterIndex];

        if(!targetPoster) return;

        targetPoster.windows = targetPoster.windows.filter(win => win.id !== idToRemove)
        setPosterData(updatedPosters);
    }

    const CreatingPosterBackground = Array(1000).fill(null).map((_, index)=>(
        <div key={index} className={style.menuProfTest}></div>
    ))

    const toogleEditPoster = (posterId) => {
        setChoosePoster(!choosePoster);
        setEditPoster(!editPoster);
        setCreatPoserButtons(!creatPosterButtons)

        const targetedPoster = posterData.filter(poster => poster.id === posterId);
        setSelectedPoster(targetedPoster)

    }

    const updatedPosters = (editedPoster) => {
        const selectedPosterId =  editedPoster[0]?.id;
        const eraseOldVersion = posterData.filter(poster => poster.id !== selectedPosterId)
        const mergedPosters = [...editedPoster, ...eraseOldVersion]

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
            setSelectedPoster([])
            console.log("Message from db", data.message);
        })
        .catch(err=>{
            console.error("Error saving updated topics" , err)
        })
    }
   
    
    const [enablePosterState, setEnablePosterState] = useState([]);
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

    const getUserPosterState = (posterName) =>{
        const posterObj = enablePosterState.find(obj => obj.name === "UsersPosters");
        return posterObj?.state?.[posterName] ?? false;
    };

    const addWindowToPoster = (style) =>{ 
        const updated = [...posterData];
        const selectedPosterId = selectedPoster[0]?.id;
        const targetPoster = updated.find(p => p.id === selectedPosterId);
        if(!targetPoster) return;

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
                ? {command: "", output: ""} 
                : {content: ""}            
            ),
        };
        targetPoster.windows.push(newWindow);
        setPosterData(updated);
        setSelectedPoster([targetPoster]);
    };



    return(
        <>
            {choosePoster && 
                <div className={style.menuProfilelDesktopEdit} >
                    <div className={style.panelFlexAndBorder}>
                        <SideButton
                            buttonStyle="buttonsOnPanels" 
                            newStyle="buttonsOnPanels"
                        >Yours posters
                        </SideButton>
                        
                        {posterData.map((poster, posterIndex)=>(
                            <div key={posterIndex}>
                                <SideButton
                                        buttonState={getUserPosterState(poster.name)} 
                                        buttonStyle="menuButtonsGreen" 
                                        newStyle="menuButtonsRed"
                                        onClick={()=>toogleEditPoster(poster.id)}
                                    >
                                    {poster.name}
                                    </SideButton>
                            </div>
                        ))}
                    </div>
                </div>
            }
            
            {editPoster && 
               <>
                <div className={style.menuProfileCreatPosterBackground}>{CreatingPosterBackground}</div>
                <div className={style.menuProfileCreatPoster}>
                <div style={{position:'absolute',left:'0.2%',top:'3%'}}>
                        {creatPosterButtons && 
                            <nav className={style.panelFlex}>
                                <SideButton
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
                                    onClick={()=>updatedPosters(selectedPoster)}
                                >save</SideButton>     
                            </nav>
                        }
                    </div>
                    //push
                    {selectedPoster.map((poster, posterIndex)=>(
                        <div key={posterIndex}>
                            {poster.windows.map(win=>(
                            <DraggableWindow 
                                key={win.id}
                                state={true}
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

export default EditPoster;