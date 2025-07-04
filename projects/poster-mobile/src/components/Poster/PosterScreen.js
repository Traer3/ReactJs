import React, { useEffect, useState } from "react";
import windowStyle from "../Windows/WindowStyle.module.css"

import Textarea from "../Windows/Textarea";
import DraggableWindow from "../Windows/DraggableWindow";
import { useUser } from "../../PostersContext";



const PosterScreen = ({checkState,setCheckState}) => {

    const {userId, BASE_URL} = useUser();
    
    const [postersData, setPostersData] = useState([]);
        useEffect(()=>{
            if(userId === 0) return

            fetch(`${BASE_URL}/getPosterData/${userId}`)
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

        fetch(`${BASE_URL}/savePosterData`,{
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
                    {poster.state && //
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