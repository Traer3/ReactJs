import React, { useEffect, useState } from "react";
import style from "../css/MenuScreen.module.css"
import TwoAnswers from "./TwoAnswers";
import DisplayElements from "./DisplayElements";
import FLEXBox from "./FLEXBox";
import StyleUsage from "./StyleUsage";
import ProblemsWithStyles from "./ProblemsWithStyles";
import Position from "./Postion";

const PosterMain = ({userId}) =>{

    const [items, setItems] = useState(false);
    const [posterStateArray, setPosterStateArray] = useState([
        {name: "TwoAnswers", state:{
            logicAND: true,
            logicANDExample: true,
            logicANDCode: true,
            ternaryCode: true,
            ternaryOperatorData: true,
        }},
        {name: "DisplayElements", state:{
            ternaryMethod: true,
            summaryTM: true,
            AND: true,
            logicANDSummary: true,
        }},
        {name: "FLEXBox", state:{
            summaryMDC: true,
            mainDivContainer: true,
            summaryDWB: true,
            divWithBoxes: true,
            summaryB: true,
            boxes: true,
        }},
        {name: "StyleUsage", state:{
            summaryIS: true,
            inlineStyles: true,
            summaryCSSInJS: true,
            cssInJS: true,
            summaryCSSModules: true,
            cssModules: true,
            cssModulesUsage: true,
            summarySF: true,
            separateFile: true,
            separateFileUsage: true,
        }},
        {name: "ProblemsWithStyles", state:{
            summary: true,
            menuPanel: true,
            menuPanelStyles: true,
        }},
        {name: "Position", state:{
            summaryPositions: true,
            positions: true,
            summaryTextPositions: true,
            textPositions: true,
            summaryWH: true,
            widthHeight: true,    
        }},
    ]);
    

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
    }, [userId]);

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
        <div>
            <button className={style.buttonsOnMenu} onClick={showItemList}>
                 Posters
            </button>

            {items && (
                
                <div className={`${style.listOfTopics} ${items ? style.listOfTopicsVisible : ""}`}>
                    
                    <button className={style.buttonsOnList} 
                            onClick={()=>toggleTopic("twoAnswers")}
                        > Два ответа
                    </button>
                    
                    {topicsState.twoAnswers && <TwoAnswers posterStates={getPosterState("TwoAnswers")} updatePosterState={updatePosterState}/>} 

                    <button className={style.buttonsOnList} 
                            onClick={()=>toggleTopic("displayElements")}
                        > Отображение элементов
                    </button>
                    {topicsState.displayElements && <DisplayElements posterStates={getPosterState("DisplayElements")} updatePosterState={updatePosterState}/>}

                    <button className={style.buttonsOnList} 
                            onClick={()=>toggleTopic("flexBox")}
                        > FLEX контейнеры
                    </button>
                    {topicsState.flexBox && <FLEXBox posterStates={getPosterState("FLEXBox")} updatePosterState={updatePosterState}/>}

                    <button className={style.buttonsOnList} 
                            onClick={()=>toggleTopic("styleUsage")}
                        > Использование стилей
                    </button>
                    {topicsState.styleUsage && <StyleUsage posterStates={getPosterState("StyleUsage")} updatePosterState={updatePosterState}/>}

                    <button className={style.buttonsOnList} 
                            onClick={()=>toggleTopic("problemsWithStyles")}
                        > Проблема со стилями 
                    </button>
                    {topicsState.problemsWithStyles && <ProblemsWithStyles posterStates={getPosterState("ProblemsWithStyles")} updatePosterState={updatePosterState}/>}

                    <button className={style.buttonsOnList} 
                            onClick={()=>toggleTopic("position")}
                        > Positions
                    </button>
                    {topicsState.position && <Position posterStates={getPosterState("Position")} updatePosterState={updatePosterState}/>}
                    
                </div>
            )}
        <button className={style.buttonsOnMenu} 
                            onClick={savePosterStates}
                        > Сохранить 
        </button>
        
            <h1 style={{backgroundColor:'red', width:'100px ' , height:'100px', color:'white'}  }>{userId}</h1>
        </div>
    );
};
export default PosterMain;