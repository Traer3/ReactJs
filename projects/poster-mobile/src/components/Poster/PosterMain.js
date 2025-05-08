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
import windowStyle from "../Windows/WindowStyle.module.css"
import BoxCheck from "./BoxCheck";

const PosterMain = ({posterStateArray, setPosterStateArray, userId,enablePosterState,setEnablePosterState,postersData, setPostersData,setCheckState,checkState}) => {
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

        if(userId === 0) return

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


    //////////////////////////////////////////////////////
    //database posters 

    const [userPosters, setUserPosters] = useState(false);
    

    const [showPosters, setShowPosters] = useState([]);
    
    useEffect(()=>{
        setShowPosters(postersData);
        console.log("checkState UPDATED")
    },[userId,postersData,checkState])

    
    const handleCloseWindow = (posterIndex,idToToggle) =>{
        const updatedPosters = [...showPosters];
        const targetPoster = updatedPosters[posterIndex];

        if(!targetPoster) return;

        targetPoster.windows = targetPoster.windows.map(win => 
            win.id === idToToggle ? {...win, state: !win.state} : win
        );

        setPostersData(updatedPosters);
        updatePostersData()
    }

    const togglePoster = (posterId) => {
        const updatedPosters = showPosters.map(poster=>{
            if(poster.id === posterId){
                return{
                    ...poster,
                    state: !poster.state
                };
            }
            return poster;
        })
        setShowPosters(updatedPosters)
        updatePostersData();
    }

    
    const groupBoxes = (windows) =>{
        const groups = {
            red: [],
            green: [],
            yellow: [],
            default: [],
        };

        windows.forEach(win => {
            if(win.style === "redSummWindow" || win.style === "redTermWindow"){
                groups.red.push(win);
            }else if(win.style === "greenSummWindow" || win.style === "greenTermWindow"){
                groups.green.push(win);
            }else if(win.style === "yellowSummWindow" || win.style === "yellowTermWindow"){
                groups.yellow.push(win);
            }else{
                groups.default.push(win);
            }
        });
        return groups;
    }
    
     const updatePostersData = () => {
            console.log(postersData);
            fetch('http://localhost:3001/savePosterData',{
                method: 'POST',
                headers:{'Content-Type': 'application/json'},
                body: JSON.stringify({
                    userId: userId,
                    posterData: postersData,
                })
            })
            .then(res => res.json())
            .then(data=>{
                console.log("Message from db", data.message);
                setCheckState(Date.now()); //это часть костыля
            })
            .catch(err=>{
                console.error("Error saving updated topics" , err)
            })
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

                   {showPosters.map((poster,posterIndex)=>{
                   const  grouped = groupBoxes(poster.windows);
                    return(
                        <>
                            <div 
                                key={posterIndex}
                                style={{
                                    display:'flex',
                                    justifyContent:'center',
                                }}
                            >
                                <SideButton
                                    newStyle="buttonsOnList"
                                    onClick={()=> togglePoster(poster.id)}
                                >
                                    {poster.name}
                                </SideButton>
                             </div>
                        
                             <div 
                                style={{
                                    display:'flex',
                                    justifyContent:'center',
                                }}
                            >
                            {//не работает 
                            ["red","green","yellow","default"].map(groupKey =>(
                                grouped[groupKey].length > 0 && (
                                    <div key={groupKey} className={windowStyle.columnSquare}> 
                                        {grouped[groupKey].map(win=>(
                                            <BoxCheck
                                                key={win.id}
                                                color={win.style}
                                                state={win.state}
                                                toggleWindow={()=> handleCloseWindow(posterIndex,win.id)}
                                            />
                                        ))}
                                    </div>
                                )
                            ))}
                            </div>
                        </>
                    )
                   })}

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

