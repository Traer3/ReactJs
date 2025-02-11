import React, { useEffect, useState } from "react";
//import TwoAnswers from "./Posters/TowAnswers";
import style from "../SidePanels.module.css"
import ShowPoster from "./ShowPoster";
import SideButton from "../SidePanelComponents/SideButton";
import TwoAnswers2 from "./Posters/TowAnswers2";
import { createPortal } from "react-dom";
//import TestPoster from "./Posters/TestPoster";


const PosterMain = ({posterStateArray, setPosterStateArray, userId, portalDiv}) => {
    const [items, setItems] = useState(false);

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
        fetch(`http://localhost:3001/getPosterStates/${userId}`)
        .then((res)=>res.json())
        .then((data) => {
            if(data.posterStateArray){

                setPosterStateArray(data.posterStateArray);//Delete before updating array posterStateArray =)
                
            }
        })
        .catch((err)=> console.error(err));
    }, [userId ,setPosterStateArray]);

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


    const updatePosterState = (posterName, newState)=>{
        setPosterStateArray((prevArray) =>{
            const updatedArray = prevArray.map((poster)=>
                poster.name === posterName 
                ? { ...poster, state: {...poster.state, ...newState}}
                : poster
            ); 
            return updatedArray;
        });
    };

    const getPosterState = (posterName) =>{
        const poster = posterStateArray.find((p)=> p.name === posterName);
        return poster ? poster.state : {};
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
                        <TwoAnswers2 posterStates={getPosterState("TwoAnswers")} updatePosterState={updatePosterState} portalDiv={portalDiv}/>  
                    </ShowPoster>
                    

                </div>
            )}
   
            <SideButton 
                newStyle="buttonsOnPanels"
                onClick={savePosterStates}
                //Удалить потом Save , он нужен ток в <MenuScreen>
                >Save
            </SideButton>
    
            <h1 style={{backgroundColor:'red', width:'100px ' , height:'100px', color:'white'}  }>{userId}</h1>
    </div>
    );
};

export default PosterMain;

