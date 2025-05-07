import React, { useEffect, useState } from "react";
import windowStyle from "../Windows/WindowStyle.module.css"

import Textarea from "../Windows/Textarea";
import DraggableWindow from "../Windows/DraggableWindow";



const PosterScreen = () => {


    /*
    const [userPosters, setUserPosters] = useState(false);
    

    useEffect(()=>{
        const syncState = () => {
            const stored = localStorage.getItem("userPosters");
            if(stored !== null){
                setUserPosters(JSON.parse(stored));
            }
        };
        window.addEventListener("storage",syncState);
        return () => window.removeEventListener("storage",syncState);
    },[userId])
    */


    const [posterData, setPostersData] = useState(()=>{
        return JSON.parse(localStorage.getItem("postersData")) || [];
    });


    useEffect(()=>{
        const syncState = () => {
            const stored = localStorage.getItem("postersData");
            if(stored !== null){
                setPostersData(JSON.parse(stored));
            }
            console.log(stored)
        };
        
        window.addEventListener("storage",syncState);
        return ()=> window.removeEventListener("storage",syncState);
    },[])

    const handleCloseWindow = (posterIndex,idToToggle) =>{
        const updatedPosters = [...posterData];
        const targetPoster = updatedPosters[posterIndex];

        if(!targetPoster) return;

        targetPoster.windows = targetPoster.windows.map(win => 
            win.id === idToToggle ? {...win, state: !win.state} : win
        );

        setPostersData(updatedPosters);
    }

    return(
        <div>
            {posterData.map((poster, posterIndex)=>(
                <div key={posterIndex}>
                    {poster.state && 
                        <>
                            {poster.windows.map(win =>(
                                <DraggableWindow
                                    key={win.id}
                                    styleClass={windowStyle[win.style]}
                                    initialX={win.position.x}
                                    initialY={win.position.y}
                                    id={win.id}
                                    onClose={()=> handleCloseWindow(posterIndex,win.id)}
                                    state={win.state}
                                >
                                    <Textarea
                                        id={win.id}
                                        value={win.content}
                                        readOnly={true}
                                    >
                                    </Textarea>
                                </DraggableWindow>
                                
                            ))}
                        </>
                    }
                </div>
            ))}
        </div>
          
    );
};

export default PosterScreen;