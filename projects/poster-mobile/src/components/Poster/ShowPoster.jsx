import React from "react";
import style from "../SidePanels.module.css"

const ShowPoster = ({toggleTopic, topicName, topicsState,children}) => {
    return(
        <div style={{
            position:'relative',
            zIndex: 3,
          }}> 
            <button className={style.buttonsOnList} 
                        onClick={toggleTopic}
                    > {topicName}
            </button>
            {topicsState && children} 
        </div>
    );
};
export default ShowPoster;


                
