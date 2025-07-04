import React, { useState } from "react";
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

const StockPosters = ({enablePosterState,posterStateArray, setPosterStateArray}) => {

    const {userId,BASE_URL} = useUser();
    const [items, setItems] = useState(false);

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
            const response = await fetch(`${BASE_URL}/savePosterStates`,{
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