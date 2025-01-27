import React, { useEffect, useState } from "react";
import style from "../css/MenuScreen.module.css"
import TwoAnswers from "./TwoAnswers";
import DisplayElements from "./DisplayElements";
import FLEXBox from "./FLEXBox";
import StyleUsage from "./StyleUsage";
import ProblemsWithStyles from "./ProblemsWithStyles";
import Position from "./Postion";

const PosterMain = () =>{

    const [items, setItems] = useState(false);
    const [posterStateArray, setPosterStateArray] = useState([]);

    const showItemList = () => {
        setItems(!items);
    }
    useEffect(()=>{
        fetch('http://localhost:3001/getPosterStates/3')
        .then((res)=>res.json())
        .then((data) => {
            if(data.posterStateArray){
                setPosterStateArray(data.posterStateArray);
            }
        })
        .catch((err)=> console.error(err));
    })

    const savePosterStates =()=>{
        fetch('http://localhost:3001/savePosterStates',{
            method: 'POST',
            headers: {'Content-Type': 'application'},
            body: JSON.stringify({
                userId: 3, 
                posterStateArray,
            }),
        })
        .then((res)=> res.json())
        .then((data)=> alert(data.message))
        .catch((err)=> console.err(err));
    };

    
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

    const updatePosterState = (posterName, newState)=>{
        setPosterStateArray((prevArray)=>{
            const index = prevArray.findIndex((item)=> item.name === posterName);
            if (index !==  -1){
                const updatedArray = [...prevArray];
                updatedArray[index].state = newState;
                return updatedArray;
            } else{
                return[...prevArray, {name: posterName, state: newState}];
            }
        });
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
                    
                    {topicsState.twoAnswers && <TwoAnswers updatePosterState={updatePosterState}/>} 

                    <button className={style.buttonsOnList} 
                            onClick={()=>toggleTopic("displayElements")}
                        > Отображение элементов
                    </button>
                    {topicsState.displayElements && <DisplayElements/>}

                    <button className={style.buttonsOnList} 
                            onClick={()=>toggleTopic("flexBox")}
                        > FLEX контейнеры
                    </button>
                    {topicsState.flexBox && <FLEXBox/>}

                    <button className={style.buttonsOnList} 
                            onClick={()=>toggleTopic("styleUsage")}
                        > Использование стилей
                    </button>
                    {topicsState.styleUsage && <StyleUsage/>}

                    <button className={style.buttonsOnList} 
                            onClick={()=>toggleTopic("problemsWithStyles")}
                        > Проблема со стилями 
                    </button>
                    {topicsState.problemsWithStyles && <ProblemsWithStyles/>}

                    <button className={style.buttonsOnList} 
                            onClick={()=>toggleTopic("position")}
                        > Positions
                    </button>
                    {topicsState.position && <Position/>}
                    
                </div>
            )}
        <button className={style.buttonsOnMenu} 
                            onClick={savePosterStates}
                        > Сохранить 
        </button>

        </div>
    );
};
export default PosterMain;