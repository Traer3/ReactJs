import React from "react";
import style from "../css/MenuScreen.module.css"
const GraphicBasics = () => {
    return(
        <div >
            <button className={style.buttonsOnMenu}>
                 css-basics
            </button>
            <div className={style.listOfTopics}>
                <button className={style.buttonsOnList}>Компонентный подход</button>
                <button className={style.buttonsOnList}>Динамические стили</button>
            </div>
            
        </div>
    );
};

export default GraphicBasics;