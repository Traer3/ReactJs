import React, { useEffect, useState } from "react";
import style from "../SidePanels.module.css"
import windowStyle from "../Windows/WindowStyle.module.css"
import DraggableWindow from "../Windows/DraggableWindow";
import Textarea from "../Windows/Textarea"; // Мы будем задавать базе данных запрос на то что бы сохранить информацию с этого текстового поля в таблицу , для каждого поля свой запрос 
import SideButton from "../SidePanelComponents/SideButton";
import ColoredBox from "../Windows/ColoredBox";

//Изменять размер окна , отягивая за край , сохранить размер окна в базу 
//Сохранять позицию для Юзера в базе 
//Создать кнопку Постеры юзера 
//Загрузить с базы постеры от юзера 

// показать постеры из базы 
// редактировать постеры 
// разбить код 


const CreatePoster = ({creatPosterButtons}) => {

    const [chooseStyle, setChooseStyle] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    
    const [creatPoster, setCreatPoster] = useState(false);

    const toogleBoxes = ()=>{
        setChooseStyle(!chooseStyle)
    }
    const CreatingPosterBackground = Array(1000).fill(null).map((_, index)=>(
        <div key={index} className={style.menuProfTest}></div>
    ))


    
    const userId = 1; //потом будем получать через пропсы 
    const [posterData, setPosterData] = useState([]);
    const [windows, setWindows] = useState([]);
    const [textareaData, setTextareaData,] = useState([]);
    const [posterName, setPosterName] = useState("") 
    const [creatPosteName, setCreatPosterName] = useState(true);

    const handleCreatePoster = () => {
        if(!posterName) return

        const newPoster = {
            name: posterName,
            windows: []
        };

        setPosterData(prev => [...prev, newPoster]);
        setPosterName("");   
        setCreatPoster(!creatPoster); 
        setCreatPosterName(!creatPosteName)
        setShowMenu(false)
    }

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

    const handleTextareaChange = (id, value) =>{
        setTextareaData(prev => ({...prev, [id]: value}));
    }

    const handleCloseWindow = (idToRemove) =>{
        setWindows((prev)=> prev.filter(win => win.id !== idToRemove));
    }
    
    return(
        <>
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
        </>
    );
};

export default CreatePoster;