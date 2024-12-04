import React, { useState } from "react";
import style from "../css/MenuScreen.module.css"
const GraphicBasics = () => {
    const [items, setItems] = useState(false);

    const showItemList = () => {
        setItems(!items);
    }

    return(
        <div >
            <button className={style.buttonsOnMenu} onClick={showItemList}>
                 css-basics
            </button>

            <div className={`${style.listOfTopics} ${items ? style.listOfTopicsVisible : ""}`}>
                <button className={style.buttonsOnList}>Компонентный подход</button>
                <button className={style.buttonsOnList}>Динамические стили</button>
            </div>

        </div>
    );
};

export default GraphicBasics;