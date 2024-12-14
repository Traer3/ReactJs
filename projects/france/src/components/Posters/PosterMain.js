import React, { useState } from "react";
import style from "../css/MenuScreen.module.css"
import TwoAnswers from "./TwoAnswers";

const PosterMain = () =>{

    const [items, setItems] = useState(false);

    const showItemList = () => {
        setItems(!items);
    }


    const [topicsState, setTopicsState] = useState({
        componentApproach: false,
        dynamicStyles: false,
        twoAnswers: false,
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
                </div>
            )}

        </div>
    );
};
export default PosterMain;