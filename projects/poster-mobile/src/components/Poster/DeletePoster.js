import React, { useEffect, useState } from "react";
import SideButton from "../SidePanelComponents/SideButton";
import style from "../SidePanels.module.css"
import { useUser } from "../../PostersContext";

const DeletePoster = () =>{
    
    const {userId} = useUser();

    const [enablePosterState, setEnablePosterState] = useState([]);
    useEffect(()=>{
            fetch(`http://localhost:3001/getEnabledPostersState/${userId}`) //desktop_edit
            .then((res)=>res.json())
            .then((data)=>{
                if(data.enablePosterState){
                    setEnablePosterState(data.enablePosterState)
                }
            })
            .catch((err)=> console.error(err));
        }, [userId]);
    

    const [posterData, setPosterData] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:3001/getPosterData/${userId}`)
        .then((res)=>res.json())
        .then((data)=>{
            if(data.posterData){
                setPosterData(data.posterData)
            }
        })
        .catch((err)=> console.error(err))
    },[userId])

    const getUserPosterState = (posterName) =>{
        const posterObj = enablePosterState.find(obj => obj.name === "UsersPosters");
        return posterObj?.state?.[posterName] ?? false;
    };

    console.log(posterData)

    const deletePoster = (posterId) => {
        const updatePosters = posterData.filter(poster => poster.id !== posterId)
        saveEnabledPostersState(updatePosters)

    }

    const saveEnabledPostersState = (updatedPosters) => { 
        fetch('http://localhost:3001/savePosterData',{ 
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({
                userId: userId,
                posterData: updatedPosters,
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log("Message from db ", data.message);
        })
        .catch(err=>{
            console.error("Error saving new posters" , err)
        })
    }
    


    return(
        <div className={style.menuProfilelDesktopEdit} >
            
        
            <div className={style.panelFlexAndBorder}>
                <SideButton
                    buttonStyle="buttonsOnPanels" 
                    newStyle="buttonsOnPanels"
                >Yours posters
                </SideButton>
                
                {posterData.map((poster, posterIndex)=>(
                    <div key={posterIndex}>
                        <SideButton
                                buttonState={getUserPosterState(poster.name)} 
                                buttonStyle="menuButtonsGreen" 
                                newStyle="menuButtonsRed"
                                onClick={()=>deletePoster(poster.id)}
                            >
                            {poster.name}
                            </SideButton>
                    </div>
                ))}
            </div>
    </div>
    );
};

export default DeletePoster;