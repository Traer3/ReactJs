import React, { useState } from "react";
import style from "../css/MenuScreen.module.css"
import ComponentApproach from "./base/ComponentApproach";
import DynamicStyles from "./base/DynamicStyles";

const GraphicBasics = () => {
    const [items, setItems] = useState(false);

    const showItemList = () => {
        setItems(!items);
    }


    const [topicsState, setTopicsState] = useState({
        componentApproach: false,
        dynamicStyles: false,
    });

    const toggleTopic = (topic) => {
        setTopicsState((prevState)=>({
            ...prevState,
            [topic]: !prevState[topic],
        }));
    };



    return(
        

        
        <div >
            <button className={style.buttonsOnMenu} onClick={showItemList}>
                 css-basics
            </button>
        {items && (
                <div className={`${style.listOfTopics} ${items ? style.listOfTopicsVisible : ""}`}>
                    
                    <button className={style.buttonsOnList} 
                            onClick={()=> toggleTopic("componentApproach")}
                        > Компонентный подход
                    </button>
                    {topicsState.componentApproach && <ComponentApproach/>}

                    <button className={style.buttonsOnList} 
                            onClick={()=>toggleTopic("dynamicStyles")}
                        > Динамические стили
                    </button>
                    {topicsState.dynamicStyles && <DynamicStyles/>}
                </div>
        )}
        </div>
        
    );
};



export default GraphicBasics;

