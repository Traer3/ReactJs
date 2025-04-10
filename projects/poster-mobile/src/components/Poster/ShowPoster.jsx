import React from "react";
import style from "../SidePanels.module.css"

const ShowPoster = ({toggleTopic, topicName, topicsState,children,togglePoster}) => {
    return(
        <div> 
            {togglePoster && 
                <button 
                    className={style.buttonsOnList} 
                    onClick={toggleTopic}
                > {topicName}
                </button>
            }
            {topicsState && children} 
        </div>
    );
};
export default ShowPoster;


                
