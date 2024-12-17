import React, { useState } from "react";
import style from "../css/MenuScreen.module.css"
import TwoAnswers from "./TwoAnswers";
import DisplayElements from "./DisplayElements";
import FLEXBox from "./FLEXBox";

const PosterMain = () =>{

    const [items, setItems] = useState(false);

    const showItemList = () => {
        setItems(!items);
    }


    const [topicsState, setTopicsState] = useState({
        
        
        twoAnswers: false,
        displayElements: false,
        flexBox:false,
    });

    const toggleTopic = (topic) => {
        setTopicsState((prevState)=>({
            ...prevState,
            [topic]: !prevState[topic],
        }));
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
                    {topicsState.twoAnswers && <TwoAnswers/>}

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
                </div>
            )}

        </div>
    );
};
export default PosterMain;