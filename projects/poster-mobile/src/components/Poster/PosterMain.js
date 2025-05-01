import React, { useEffect, useState } from "react";
import TwoAnswers from "./Posters/TowAnswers";
import style from "../SidePanels.module.css"
import ShowPoster from "./ShowPoster";
import SideButton from "../SidePanelComponents/SideButton";
import DisplayElements from "./Posters/DisplayElements";
import FLEXBox from "./Posters/FLEXBox";
import StyleUsage from "./Posters/StyleUsage";
import ProblemsWithStyles from "./Posters/ProblemsWithStyles";
import Position from "./Posters/Postion";
import DraggableWindow from "../Windows/DraggableWindow";
import Textarea from "../Windows/Textarea";
import windowStyle from "../Windows/WindowStyle.module.css"

const PosterMain = ({posterStateArray, setPosterStateArray, userId,enablePosterState,setEnablePosterState}) => {
    const [items, setItems] = useState(false);
    const [showSave, setShowSave] = useState(false);
    const showItemList = (state, setState) => {
        setState(!state);
    }

    const [topicsState, setTopicsState] = useState({ 
        twoAnswers: false,
        displayElements: false,
        flexBox:false,
        styleUsage:false,
        problemsWithStyles:false,
        position:false,
    });

    const toggleTopic = (topic) => {
        setTopicsState((prevState)=>({
            ...prevState,
            [topic]: !prevState[topic],
        }));
    };

    useEffect(()=>{
        if(!userId || userId === 0){
            setShowSave(false);
            return;
        }
        setShowSave(true);
        fetch(`http://localhost:3001/getPosterStates/${userId}`)
        .then((res)=>res.json())
        .then((data) => {
            if(data.posterStateArray){
             setPosterStateArray(data.posterStateArray); //Delete before updating array posterStateArray =)
            }
        })

        
    }, [userId ,setPosterStateArray]);

    useEffect(()=>{
        const interval = setInterval(()=>{
            fetch(`http://localhost:3001/getEnabledPostersState/${userId}`)
            .then((res)=>res.json())
            .then((data)=>{
            if(data.enablePosterState){
                setEnablePosterState(data.enablePosterState)
            }
        })
        .catch((err)=> console.error(err));
        },100); //DB delay is HUGE , нужно будет переделать, будем получать togglePoster={isPosterEnabled("TwoAnswers")} из enablePosterState который будет сохранен в переменной  
        return()=> clearInterval(interval);
    },[userId, setEnablePosterState])


    const savePosterStates =()=>{ 
        fetch('http://localhost:3001/savePosterStates',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                userId: userId,
                posterStateArray,
            }),
        })
        .then((res)=> res.json())
        .then((data)=> alert(data.message))
        .catch((err)=> console.error(err));
    };


    const updatePosterState = async (posterName, newState)=>{
        if(!userId || userId === 0){
            setPosterStateArray((prevArray) =>{
                return prevArray.map((poster)=>
                    poster.name === posterName 
                    ? { ...poster, state: {...poster.state, ...newState}}
                    : poster
                ); 
            });
            return;
        }
        setPosterStateArray((prevArray) =>{
            return prevArray.map((poster)=>
                poster.name === posterName 
                ? { ...poster, state: {...poster.state, ...newState}}
                : poster
            ); 
        });
        try{
            const response = await fetch('http://localhost:3001/savePosterStates',{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    userId: userId,
                    posterStateArray,
                }),
            });
            if(!response.ok){
                throw new Error('Error when saving')
            }
            
        }catch (error){
            console.log('Error', error);
        }
    };

    const getPosterState = (posterName) =>{
        const poster = posterStateArray.find((p)=> p.name === posterName);
        return poster ? poster.state : {};
    };

    const isPosterEnabled = (topic) => {
        const posters = enablePosterState.find(obj => obj.name === "Posters");
        return posters?.state?.[topic]
    }

    const [userPosters, setUserPosters] = useState(false);
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

    const handleCloseWindow = (posterIndex,idToRemove) =>{
        const updatedPosters = [...showPosters];
        const targetPoster = updatedPosters[posterIndex];

        if(!targetPoster) return;

        targetPoster.windows = targetPoster.windows.filter(win => win.id !== idToRemove)
        setShowPosters(updatedPosters);
    }

    return(
        <div className={style.panelFlex}>
            <SideButton 
                newStyle="buttonsOnPanels"
                onClick={()=>showItemList(items,setItems)}
                >Posters
            </SideButton>

            {items && (
                <div className={`${style.listOfTopics} ${items ? style.listOfTopicsVisible : ""}`}>
                    <ShowPoster
                        toggleTopic={()=>toggleTopic("twoAnswers")}
                        topicName="Tow Answers"
                        topicsState={topicsState.twoAnswers}
                        togglePoster={isPosterEnabled("TwoAnswers")}
                        >
                        <TwoAnswers posterStates={getPosterState("TwoAnswers")} updatePosterState={updatePosterState}/>  
                    </ShowPoster>

                    <ShowPoster 
                        toggleTopic={()=>toggleTopic("displayElements")}
                        topicName="Display Elements"
                        topicsState={topicsState.displayElements}
                        togglePoster={isPosterEnabled("DisplayElements")}
                        >
                        <DisplayElements posterStates={getPosterState("DisplayElements")} updatePosterState={updatePosterState}/>  
                    </ShowPoster>
                    <ShowPoster 
                        toggleTopic={()=>toggleTopic("flexBox")}
                        topicName="FLEXBox"
                        topicsState={topicsState.flexBox}
                        togglePoster={isPosterEnabled("FLEXBox")}
                        >
                        <FLEXBox posterStates={getPosterState("FLEXBox")} updatePosterState={updatePosterState}/>  
                    </ShowPoster>
                    <ShowPoster 
                        toggleTopic={()=>toggleTopic("styleUsage")}
                        topicName="Style Usage"
                        topicsState={topicsState.styleUsage}
                        togglePoster={isPosterEnabled("StyleUsage")}
                        >
                        <StyleUsage posterStates={getPosterState("StyleUsage")} updatePosterState={updatePosterState}/>  
                    </ShowPoster>
                    <ShowPoster 
                        toggleTopic={()=>toggleTopic("problemsWithStyles")}
                        topicName="Problems with styles"
                        topicsState={topicsState.problemsWithStyles}
                        togglePoster={isPosterEnabled("ProblemsWithStyles")}
                        >
                        <ProblemsWithStyles posterStates={getPosterState("ProblemsWithStyles")} updatePosterState={updatePosterState}/>  
                    </ShowPoster>
                    <ShowPoster 
                        toggleTopic={()=>toggleTopic("position")}
                        topicName="Position"
                        topicsState={topicsState.position}
                        togglePoster={isPosterEnabled("Position")}
                        >
                        <Position posterStates={getPosterState("Position")} updatePosterState={updatePosterState}/>  
                    </ShowPoster>
                    
                </div>
            )}

            <h1 
                style={{
                    backgroundColor:'red', 
                    width:'clamp(40px, 3vw, 5vw)' , 
                    height:'clamp(45px, 4vh, 5vh)', 
                    color:'white', 
                    textAlign:'center',
                    fontSize:'0.8em'
                }}
                >iD {userId} 
                    <br/>W = {window.innerWidth}
                    <br/>H = {window.innerHeight}
            </h1>

            <SideButton 
                newStyle="buttonsOnPanels"
                onClick={()=>showItemList(userPosters,setUserPosters)}
                >User Posters
            </SideButton>

            
            
            {userPosters && 
                <div className={`${style.listOfTopics} ${userPosters ? style.listOfTopicsVisible : ""}`}>
                    {showPosters.map((poster, posterIndex)=>(
                        <>
                            <SideButton 
                                newStyle="buttonsOnPanels"
                                >{poster.name}
                            </SideButton>
            
                            <div key={posterIndex}>
                            {poster.windows.map(win =>(
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
                                        value={win.content}
                                        readOnly={true}
                                    >

                                    </Textarea>
                                </DraggableWindow>
                            ))}
                            </div>
                        </>
                    ))}
                </div>
            }

            {showSave &&
                <SideButton 
                    newStyle="buttonsOnPanels"
                    onClick={savePosterStates}
                    >Save
            </SideButton>
                
            } 
    </div>
    );
};

export default PosterMain;

