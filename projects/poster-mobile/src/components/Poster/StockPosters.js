import React, { useEffect, useState } from "react";
import style from "../SidePanels.module.css"
import ShowPoster from "./ShowPoster";
import TwoAnswers from "./Posters/TowAnswers";
import DisplayElements from "./Posters/DisplayElements";
import FLEXBox from "./Posters/FLEXBox";
import StyleUsage from "./Posters/StyleUsage";
import ProblemsWithStyles from "./Posters/ProblemsWithStyles";
import Position from "./Posters/Postion";
import { useUser } from "../../PostersContext";
import SideButton from "../SidePanelComponents/SideButton";

const StockPosters = ({enablePosterState, setEnablePosterState,posterStateArray, setPosterStateArray, postersData, checkState}) => {

    const {userId} = useUser();
    const [items, setItems] = useState(false);

    const [usersPostersState, setUsersPosters] = useState([]);

    useEffect(()=>{
    
            if(userId === 0) return
    
            const interval = setInterval(()=>{
                fetch(`http://localhost:3001/getEnabledPostersState/${userId}`)
                .then((res)=>res.json())
                .then((data)=>{
                if(data.enablePosterState){
                    setEnablePosterState(data.enablePosterState);
                    // "UsersPosters" не могу найти в descktopedit
                    setUsersPosters(data.enablePosterState.find(obj => obj.name === "UsersPosters") || [])
                    
                }
            })
            .catch((err)=> console.error(err));
            },100); //DB delay is HUGE , нужно будет переделать, будем получать togglePoster={isPosterEnabled("TwoAnswers")} из enablePosterState который будет сохранен в переменной  
            return()=> clearInterval(interval);
    },[userId, setEnablePosterState])

    const [showPosters, setShowPosters] = useState([]);
    useEffect(()=>{
             setShowPosters(postersData);
    },[userId,postersData,checkState])


    const showItemList = (state, setState) => {
        setState(!state);
        console.log(filterPosters())
    }

    const filterPosters = ()=>{
        let posters = usersPostersState.state;
        console.log(usersPostersState.state)
        let whiteList = Object.keys(posters).filter(poster => posters[poster])
        return showPosters.filter(poster => whiteList.includes(poster.name))
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

    const isPosterEnabled = (topic) => {
        const posters = enablePosterState.find(obj => obj.name === "Posters");
        return posters?.state?.[topic]
    }

    const getPosterState = (posterName) =>{
        const poster = posterStateArray.find((p)=> p.name === posterName);
        return poster ? poster.state : {};
    };



    return(
        <div className={style.panelFlex}>
            <SideButton 
                newStyle="buttonsOnPanels"
                onClick={()=>showItemList(items,setItems)}
                >Posters
            </SideButton>
            
            {items && (
                <div className={style.listOfTopics}>
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
        </div>
    );
};

export default StockPosters;