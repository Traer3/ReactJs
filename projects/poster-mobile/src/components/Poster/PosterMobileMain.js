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
import { useUser } from "../../PostersContext";


const PosterMobileMain = ({posterStateArray, setPosterStateArray, userId,}) => {

    const {BASE_URL} = useUser();

    const [items, setItems] = useState(false);
    const [showSave, setShowSave] = useState(false);

    const showItemList = () => {
        setItems(!items);
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
        setShowSave(false);
        fetch(`${BASE_URL}/getPosterStates/${userId}`)
        .then((res)=>res.json())
        .then((data) => {
            if(data.posterStateArray){

                setPosterStateArray(data.posterStateArray);//Delete before updating array posterStateArray =)
                
            }
        })
        .catch((err)=> console.error(err));
    }, [userId ,setPosterStateArray]);

    const savePosterStates =()=>{ 
        fetch(`${BASE_URL}/savePosterStates`,{
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
                    ? { ...poster, mobileState: {...poster.state, ...newState}}
                    : poster
                ); 
            });
            return;
        }
        setPosterStateArray((prevArray) =>{
            return prevArray.map((poster)=>
                poster.name === posterName 
                ? { ...poster, mobileState: {...poster.mobileState, ...newState}}
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

    const getPosterState = (posterName) =>{
        const poster = posterStateArray.find((p)=> p.name === posterName);
        return poster ? poster.mobileState : {};
    };

  
    return(
        <div className={style.panelFlex}>
        
            <SideButton 
                newStyle="buttonsOnPanels"
                onClick={showItemList}
                >Posters
            </SideButton>

           
            {items && (
                <div className={`${style.listOfTopics} ${items ? style.listOfTopicsVisible : ""}`}>

                    <ShowPoster 
                        toggleTopic={()=>toggleTopic("twoAnswers")}
                        topicName="Tow Answers"
                        topicsState={topicsState.twoAnswers}
                        >
                        <TwoAnswers posterStates={getPosterState("TwoAnswers")} updatePosterState={updatePosterState}/>  
                    </ShowPoster>

                    <ShowPoster 
                        toggleTopic={()=>toggleTopic("displayElements")}
                        topicName="Display Elements"
                        topicsState={topicsState.displayElements}
                        >
                        <DisplayElements posterStates={getPosterState("DisplayElements")} updatePosterState={updatePosterState}/>  
                    </ShowPoster>
                    <ShowPoster 
                        toggleTopic={()=>toggleTopic("flexBox")}
                        topicName="FLEXBox"
                        topicsState={topicsState.flexBox}
                        >
                        <FLEXBox posterStates={getPosterState("FLEXBox")} updatePosterState={updatePosterState}/>  
                    </ShowPoster>
                    <ShowPoster 
                        toggleTopic={()=>toggleTopic("styleUsage")}
                        topicName="Style Usage"
                        topicsState={topicsState.styleUsage}
                        >
                        <StyleUsage posterStates={getPosterState("StyleUsage")} updatePosterState={updatePosterState}/>  
                    </ShowPoster>
                    <ShowPoster 
                        toggleTopic={()=>toggleTopic("problemsWithStyles")}
                        topicName="Problems with styles"
                        topicsState={topicsState.problemsWithStyles}
                        >
                        <ProblemsWithStyles posterStates={getPosterState("ProblemsWithStyles")} updatePosterState={updatePosterState}/>  
                    </ShowPoster>
                    <ShowPoster 
                        toggleTopic={()=>toggleTopic("position")}
                        topicName="Position"
                        topicsState={topicsState.position}
                        >
                        <Position posterStates={getPosterState("Position")} updatePosterState={updatePosterState}/>  
                    </ShowPoster>
                    
                </div>
            )}
   
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

export default PosterMobileMain;

