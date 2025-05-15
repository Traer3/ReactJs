import React, { useEffect, useState } from "react";
import windowStyle from "../Windows/WindowStyle.module.css"

import Textarea from "../Windows/Textarea";
import DraggableWindow from "../Windows/DraggableWindow";



const PosterScreen = ({userId, checkState,setCheckState}) => {

    
    const [postersData, setPostersData] = useState([]);
        useEffect(()=>{
            fetch(`http://localhost:3001/getPosterData/${userId}`)
            .then((res)=>res.json())
            .then((data)=>{
                if(data.posterData){
                    setPostersData(data.posterData)
                }
            })
            .catch((err)=> console.error(err))
        },[userId,checkState])


    const handleCloseWindow = (posterIndex,idToToggle) =>{
        const updatedPosters = [...postersData];
        const targetPoster = updatedPosters[posterIndex];

        if(!targetPoster) return;

        targetPoster.windows = targetPoster.windows.map(win => 
            win.id === idToToggle ? {...win, state: !win.state} : win
        );
        setCheckState(Date.now()); //это часть костыля
        setPostersData(updatedPosters);
        updatePostersData(updatedPosters);
    }

    const updatePostersData = (dataToSave) => {
        console.log(postersData);
        fetch('http://localhost:3001/savePosterData',{
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({
                userId: userId,
                posterData: dataToSave,
            })
        })
        .then(res => res.json())
        .then(data=>{
            setCheckState(Date.now()); //это часть костыля
            console.log("Message from db", data.message);
        })
        .catch(err=>{
            console.error("Error saving updated topics" , err)
        })
    }


    return(
        <div style={{
            position:'absolute',
            top:'0',
            left:'0',
            height:'100%',
            width:'100%',
        }}>
            {postersData.map((poster, posterIndex)=>(
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
                                    <p style={{padding:'0px',margin:'0px'}}>X: {win.position.x}</p>  <p style={{padding:'0px',margin:'0px'}}>Y: {win.position.y}</p>
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