import React, { useEffect, useState } from "react";
import style from "../SidePanels.module.css"
import SideButton from "../SidePanelComponents/SideButton";
import windowStyle from "../Windows/WindowStyle.module.css"
import BoxCheck from "./BoxCheck";
import StockPosters from "./StockPosters";
import { useUser } from "../../PostersContext";

const PosterMain = ({posterStateArray, setPosterStateArray, userId,enablePosterState,setEnablePosterState,postersData, setPostersData,setCheckState,checkState}) => {

    const {BASE_URL} = useUser();

    const showItemList = (state, setState) => {
        setState(!state);
        console.log(filterPosters())
    }


    useEffect(()=>{
        if(userId === 0) return

        fetch(`${BASE_URL}/getPosterStates/${userId}`)
        .then((res)=>res.json())
        .then((data) => {
            if(data.posterStateArray){
             setPosterStateArray(data.posterStateArray); //Delete before updating array posterStateArray =)
            }
        })

        
    }, [userId ,setPosterStateArray]);

    useEffect(()=>{

        if(userId === 0) return

        const interval = setInterval(()=>{
            fetch(`${BASE_URL}/getEnabledPostersState/${userId}`)
            .then((res)=>res.json())
            .then((data)=>{
            if(data.enablePosterState){
                setEnablePosterState(data.enablePosterState);
                setUsersPosters(data.enablePosterState.find(obj => obj.name === "UsersPosters") || [])
                
            }
        })
        .catch((err)=> console.error(err));
        },100); //DB delay is HUGE , нужно будет переделать, будем получать togglePoster={isPosterEnabled("TwoAnswers")} из enablePosterState который будет сохранен в переменной  
        return()=> clearInterval(interval);
    },[userId, setEnablePosterState])


    const savePosterStates =()=>{ 
        fetch(`${BASE_URL}/savePosterStates`,{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                userId: userId,
                posterStateArray,
            }),
        })
        .then((res)=> res.json())
        .then((data)=> alert(data.message))
        .catch((err)=> console.error(err));
    };


    //////////////////////////////////////////////////////
    //database posters 

    const [userPosters, setUserPosters] = useState(false);
    

    const [showPosters, setShowPosters] = useState([]);

    const [usersPostersState, setUsersPosters] = useState([]);
    

    

    useEffect(()=>{
        setShowPosters(postersData);
    },[userId,postersData,checkState])

    
    const handleCloseWindow = (posterIndex,idToToggle) =>{
        const updatedPosters = [...showPosters];
        const targetPoster = updatedPosters[posterIndex];

        if(!targetPoster) return;

        targetPoster.windows = targetPoster.windows.map(win => 
            win.id === idToToggle ? {...win, state: !win.state} : win
        );

        setPostersData(updatedPosters);
        updatePostersData(updatedPosters)
    }

    const togglePoster = (posterId) => {
        const updatedPosters = showPosters.map(poster=>{
            if(poster.id === posterId){
                return{
                    ...poster,
                    state: !poster.state,
                    windows: poster.windows.map(win=>({
                        ...win,
                        boxState: !win.boxState
                    }))
                };
            }
            return poster;
        })
        setShowPosters(updatedPosters);
        setPostersData(updatedPosters);
        setCheckState(Date.now()); //это часть костыля
        updatePostersData(updatedPosters); 
    }

    
    
    const groupBoxes = (windows) =>{
        const groups = {
            red: [],
            green: [],
            yellow: [],
            default: [],
        };

        windows.forEach(win => {
            if(win.style === "redSummWindow" || win.style === "redTermWindow"){
                groups.red.push(win);
            }else if(win.style === "greenSummWindow" || win.style === "greenTermWindow"){
                groups.green.push(win);
            }else if(win.style === "yellowSummWindow" || win.style === "yellowTermWindow"){
                groups.yellow.push(win);
            }else{
                groups.default.push(win);
            }
        });
        return groups;
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
                console.log("Message from db", data.message);
                setCheckState(Date.now()); //это часть костыля
            })
            .catch(err=>{
                console.error("Error saving updated topics" , err)
            })
        }

    const filterPosters = ()=>{
       let posters = usersPostersState.state;
       let whiteList = Object.keys(posters).filter(poster => posters[poster])
       return showPosters.filter(poster => whiteList.includes(poster.name))
    }
    
    //fix poster position from DB
    return(
        <div className={style.panelFlex}>
            <StockPosters 
                enablePosterState={enablePosterState} 
                posterStateArray={posterStateArray} 
                setPosterStateArray={setPosterStateArray}
            />

            {userId > 0 ? 
                <>
                    <SideButton 
                        newStyle="buttonsOnPanels"
                        onClick={()=>showItemList(userPosters,setUserPosters)}
                    >User Posters
                    </SideButton>

                    {userPosters && 
                        <div className={style.listOfTopics}>

                        {filterPosters().map((poster,posterIndex)=>{
                        const  grouped = groupBoxes(poster.windows);
                            return(
                                <div key={poster.id}>
                                    <div 
                                        style={{
                                            display:'flex',
                                            justifyContent:'center',
                                        }}
                                    >
                                        <SideButton
                                            newStyle="buttonsOnList"
                                            onClick={()=> togglePoster(poster.id)}
                                        >
                                            {poster.name}
                                        </SideButton>
                                    </div>
                                
                                    {true && 
                                    <div 
                                        style={{
                                            display:'flex',
                                            justifyContent:'center',
                                        }}
                                    >
                                    {["red","green","yellow","default"].map(groupKey =>(
                                        grouped[groupKey].length > 0 && (
                                            <div key={groupKey} className={windowStyle.columnSquare}> 
                                                {grouped[groupKey].map(win=>
                                                    win.boxState && (
                                                        <BoxCheck
                                                            key={win.id}
                                                            color={win.style}
                                                            state={win.state}
                                                            toggleWindow={()=> handleCloseWindow(posterIndex,win.id)}
                                                        />
                                                ))}
                                            </div>
                                        )
                                    ))}
                                    </div>
                                    }
                                </div>
                            )
                        })}
                        </div>
                    }
                    <SideButton 
                            newStyle="buttonsOnPanels"
                            onClick={savePosterStates}
                            >Save
                    </SideButton>                
                </> : <></>}
                
    </div>
    );
};

export default PosterMain;

