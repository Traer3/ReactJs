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


const PosterMain = ({posterStateArray, setPosterStateArray, userId,enablePosterState,setEnablePosterState}) => {
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

    //возвращаем старый topics
   

   
    //получаем новый лист и теперь мы будем отключать КНОПКИ 
    
 

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

             // setPosterStateArray(data.posterStateArray); //Delete before updating array posterStateArray =)
                
            }
        })
        fetch(`http://localhost:3001/getEnabledPostersState/${userId}`)
        .then((res)=>res.json())
        .then((data)=>{
            if(data.enablePosterState){
                setEnablePosterState(data.enablePosterState)
            }
        })
        .catch((err)=> console.error(err));
    }, [userId ,setPosterStateArray,setEnablePosterState ]);

    const getTopicsState = () => {
        fetch(`http://localhost:3001/getTopicsState/${userId}`)
        .then((res)=>res.json())
        .then((data)=>{
            if(data.topicsStateArray){
                console.log(data.topicsStateArray)
            }
        })
    }

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
                        togglePoster={isPosterEnabled("twoAnswers")}
                        >
                        <TwoAnswers posterStates={getPosterState("TwoAnswers")} updatePosterState={updatePosterState}/>  
                    </ShowPoster>

                    <ShowPoster 
                        toggleTopic={()=>toggleTopic("displayElements")}
                        topicName="Display Elements"
                        topicsState={topicsState.displayElements}
                        togglePoster={isPosterEnabled("displayElements")}
                        >
                        <DisplayElements posterStates={getPosterState("DisplayElements")} updatePosterState={updatePosterState}/>  
                    </ShowPoster>
                    <ShowPoster 
                        toggleTopic={()=>toggleTopic("flexBox")}
                        topicName="FLEXBox"
                        topicsState={topicsState.flexBox}
                        togglePoster={isPosterEnabled("flexBox")}
                        >
                        <FLEXBox posterStates={getPosterState("FLEXBox")} updatePosterState={updatePosterState}/>  
                    </ShowPoster>
                    <ShowPoster 
                        toggleTopic={()=>toggleTopic("styleUsage")}
                        topicName="Style Usage"
                        topicsState={topicsState.styleUsage}
                        togglePoster={isPosterEnabled("styleUsage")}
                        >
                        <StyleUsage posterStates={getPosterState("StyleUsage")} updatePosterState={updatePosterState}/>  
                    </ShowPoster>
                    <ShowPoster 
                        toggleTopic={()=>toggleTopic("problemsWithStyles")}
                        topicName="Problems with styles"
                        topicsState={topicsState.problemsWithStyles}
                        togglePoster={isPosterEnabled("problemsWithStyles")}
                        >
                        <ProblemsWithStyles posterStates={getPosterState("ProblemsWithStyles")} updatePosterState={updatePosterState}/>  
                    </ShowPoster>
                    <ShowPoster 
                        toggleTopic={()=>toggleTopic("position")}
                        topicName="Position"
                        topicsState={topicsState.position}
                        togglePoster={isPosterEnabled("position")}
                        >
                        <Position posterStates={getPosterState("Position")} updatePosterState={updatePosterState}/>  
                    </ShowPoster>
                    
                </div>
            )}
            <h1 
                style={{
                    backgroundColor:'red', 
                    width:'clamp(40px, 2vw, 5vw)' , 
                    height:'clamp(32px, 2.5vh, 5vh)', 
                    color:'white', 
                    textAlign:'center',
                    fontSize:'1em'
                }}
                >id {userId} 
                    <br/>Width = {window.innerWidth}
                    <br/>Height = {window.innerHeight}
                </h1>
                

                <SideButton
                     newStyle="buttonsOnPanels"
                     onClick={getTopicsState}
                >
                    get topics states
                </SideButton>

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

